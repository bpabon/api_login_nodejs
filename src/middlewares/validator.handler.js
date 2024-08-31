const boom = require('@hapi/boom');
const fs = require('fs');
const path = require('path');
const translations = JSON.parse(fs.readFileSync(path.join(__dirname, '../schemas/json/spanish-joi-messages.json'), { encoding: 'utf8' }));
// Validar los esquemas con JOIN y llegado el caso lograr traducir los mensajes a español
function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data, { abortEarly: false });
        if (error) {
            error.details?.map(error => {
                const translatedMessage = translations[error.type];
                if (translatedMessage) {
                    // Extraer el valor entre comillas dobles
                    const valueInQuotes = error.message.match(/"([^"]+)"/)[0];
                    // Buscar números en el mensaje
                    const numberMatch = error.message.match(/\d+/);
                    const number = numberMatch ? numberMatch[0] : null;
                    // Reemplazar {{limit}} con el número encontrado
                    const finalMessage = number ? translatedMessage.replace('{{limit}}', number) : translatedMessage;
                    // Reemplazar el mensaje manteniendo el valor entre comillas dobles
                    error.message = `${valueInQuotes} ${finalMessage}`;
                }
                return error;
            });
            next(boom.badRequest(error));
        }
        next();
    }
}

module.exports = validatorHandler;
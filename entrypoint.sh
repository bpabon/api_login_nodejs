
# Comando para correr la migración de la base de datos con sequelize
echo "Ejecutando el comando para crear la migración"
npm run migrations:run

# Comando para crear los datos en la base de datos
echo "Ejecutando el comando para insertar datos"
npm run seed:all

# Comando para iniciar el proyecto en Node.js
echo "Corriendo el sericio de node"
npm run dev
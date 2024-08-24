const { Sequelize } = require('sequelize');
require('dotenv').config();

const { config } = require('../config/config');
const setupModels = require('./models');

const options = {
    dialect: 'postgres',
    logging: config.env === 'dev' ? console.log : false,
}

if (config.isProd) {
    options.dialectOptions = {
        ssl: {
            rejectUnauthorized: false
        }
    }
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);
// Crear base de datos en caso de que no exista
// sequelize.query(`CREATE DATABASE ${process.env.POSTGRES_DB}`)
//     .then(() => {
//         console.log('Database created');
//         process.exit(0);
//     })
//     .catch(err => {
//         if (err.name === 'SequelizeDatabaseError' && err.message.includes('already exists')) {
//             console.log('Database already exists');
//             process.exit(0);
//         } else {
//             console.error('Error creating database:', err);
//             process.exit(1);
//         }
//     });

module.exports = sequelize;

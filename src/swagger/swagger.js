const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const tags = require('./tags/tags.swagger');
const { config } = require('../config/config');
const RutasPath = path.join(__dirname, '../routes/**/*.js');
const RutasDefinitionsPath = path.join(__dirname, './paths/**/*.js');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      description: 'Documentación del API de login en Node.js',
      version: '1.0.0',
      title: 'Api Login Node.js Express',
      contact: {
        name: "Branm Aldair Pabon Villamizar",
        url: "https://github.com/bpabon",
        email: "branmpabon@gmail.com"
      },
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    tags: tags,
    servers: [
      {
        url: `${config.urlPublic}/api/v1`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "apiKey",
          name: "x-token",
          scheme: "bearer",
          in: "header",
        },
      },
    },
    security: [
      {
        bearerAuth: []
      },
    ],
  },
  apis: [`${RutasPath}`, `${RutasDefinitionsPath}`]
};

const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

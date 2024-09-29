const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    swagger: '2.0',
    // info: {
    //   description: 'Documentación del API de login en Node.js',
    //   version: '1.0.0',
    //   title: 'ApiLogin',
    // },
    // host: 'localhost:3000',
    // basePath: '/api',
    // tags: [
    //   {
    //     name: 'user',
    //     description: 'Operaciones sobre el usuario',
    //   },
    // ],
    // schemes: ['http'],
    // paths: {
    //   '/user': {
    //     get: {
    //       tags: ['user'],
    //       summary: 'Lista los usuarios',
    //       operationId: 'listUser',
    //       responses: {
    //         default: {
    //           description: 'Lista de usuarios',
    //         },
    //       },
    //     },
    //     post: {
    //       tags: ['user'],
    //       summary: 'Crea un usuario',
    //       description: 'Crea un usuario en nuestra app',
    //       operationId: 'createUser',
    //       produces: ['application/json'],
    //       parameters: [
    //         {
    //           in: 'body',
    //           name: 'body',
    //           description: 'Usuario creado',
    //           required: true,
    //           schema: {
    //             $ref: '#/definitions/User',
    //           },
    //         },
    //       ],
    //       responses: {
    //         default: {
    //           description: 'successful operation',
    //         },
    //       },
    //     },
    //   },
    // },
    // securityDefinitions: {
    //   petstore_auth: {
    //     type: 'oauth2',
    //     authorizationUrl: 'http://petstore.swagger.io/oauth/dialog',
    //     flow: 'implicit',
    //     scopes: {
    //       'write:pets': 'modify pets in your account',
    //       'read:pets': 'read your pets',
    //     },
    //   },
    //   api_key: {
    //     type: 'apiKey',
    //     name: 'api_key',
    //     in: 'header',
    //   },
    // },
    definitions: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
      },
      ApiResponse: {
        type: 'object',
        properties: {
          code: {
            type: 'integer',
            format: 'int32',
          },
          type: {
            type: 'string',
          },
          message: {
            type: 'string',
          },
        },
      },
    },
    externalDocs: {
      description: 'Find out more about Swagger',
      url: 'http://swagger.io',
    },
  };
  const options = {
    swaggerDefinition,
    apis: ['../routes/*.js'], // Archivos donde están definidos tus endpoints
  };
  
const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

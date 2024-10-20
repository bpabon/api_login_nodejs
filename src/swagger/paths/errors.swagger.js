/**
* @swagger
* definitions:
*   ResponseGeneralError400:
*     type: object
*     required:
*       - statusCode
*       - error
*       - message
*     example:
*       statusCode: 400
*       error: 'Bad Request'
*       message: "Campo requerido o invalido"
*     properties:
*       statusCode:
*         type: number
*       error:
*         type: string
*       message:
*         type: string
*   ResponseGeneralError401:
*     type: object
*     required:
*       - status
*       - error
*       - msg
*       - stack
*     example:
*       status: 'error'
*       error: {statusCode: 401, status: 'error'}
*       msg: 'Mensaje del error encontrado'
*       stack: 'Detalle del error'
*     properties:
*       status:
*         type: string
*       error:
*         type: object
*       msg:
*         type: string
*       stack:
*         type: string
*   ResponseGeneralError500:
*     type: object
*     required:
*       - status
*       - error
*       - msg
*       - stack
*     example:
*       status: 'fail'
*       error: {expose: true, statusCode: 500, status: 500, body: 'email is required', type: 'entity.parse.failed'}
*       msg: 'Mensaje del error encontrado'
*       stack: 'Detalle del error'
*     properties:
*       status:
*         type: string
*       error:
*         type: object
*         properties:
*             expose: 
*               type: boolean
*             statusCode: 
*               type: number
*             status: 
*               type: number
*             body: 
*               type: string
*             type: 
*               type: string
*       msg:
*         type: string
*       stack:
*         type: string
*   schemas:
*       Error500:
*           type: object
*           properties:
*               value: 
*                 type: string
*               msg: 
*                 type: string
*               param: 
*                 type: string
*               location: 
*                 type: string
*/
/**
* @swagger
* definitions:
*   ResponseExitoLogin:
*     type: object
*     required:
*       - user
*       - access_token
*     example:
*       user: {id: 1, email: 'example@mail.com', role: 'admin', recoveryToken: null}
*       access_token: 'eyJh'
*     properties:
*       user:
*         type: object
*         properties:
*             id: 
*               type: number
*             email: 
*               type: string
*             role: 
*               type: string
*             recoveryToken: 
*               type: string || null
*       access_token:
*         type: string
*   ResponseRecoveryPassword:
*     type: object
*     required:
*       - msg
*     example:
*       msg: 'Se ha enviado un correo electrónico con un enlace para su cambio de contraseña.'
*     properties:
*       msg:
*         type: string
*   ResponseChangePassword:
*     type: object
*     required:
*       - msg
*     example:
*       msg: 'La contraseña se ha cambiado de forma correcta.'
*     properties:
*       msg:
*         type: string
*   ResponseNewUser:
*     type: object
*     required:
*       - msg
*     example:
*       msg: 'El usuario se creado de forma correcta.'
*     properties:
*       msg:
*         type: string
*/
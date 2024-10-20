/**
* @swagger
* definitions:
*   LoginAuth:
*     type: object
*     required:
*       - email
*       - password
*     example:
*       email: 'admin@mail.com'
*       password: '123456'
*     properties:
*       email:
*         type: string
*       password:
*         type: string
*   RecoveryPassword:
*     type: object
*     required:
*       - email
*     example:
*       email: 'example@gmail.com'
*     properties:
*        email:
*           type: string
*   ChangePassword:
*     type: object
*     required:
*       - password
*       - verify_password
*     example:
*       password: '12345678'
*       verify_password: '123456789'
*     properties:
*        password:
*           type: string
*        verify_password:
*           type: string
*   NewUserApi:
*     type: object
*     required:
*       - email
*       - password  
*       - role
*     example:
*       email: 'example@gmail.com'
*       password: '12345678'
*       role: 'customer'
*     properties:
*        email:
*           type: string
*        password:
*           type: string
*        role:
*           type: string
*/
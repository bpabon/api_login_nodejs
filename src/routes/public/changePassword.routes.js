const express = require('express');
const router = express.Router();
const path = require('path');
const validationHandler = require('../../middlewares/validator.handler');

// Ruta para mostrar el formulario
router.get('/updatePasswordUrl/:token', (req, res) => {
    res.render(path.resolve(__dirname, '../../html/change_password/index.ejs'), { token: req.params.token });
});

module.exports = router;
/*
    Rutas de usuarios / AUTH
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

// Rutas
router.post(
    '/new', 
    [ //Middlewares
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'Password es obligatorio y debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ]  
    , crearUsuario);


router.post(
    '/', 
    [ //Middlewares
        check('correo', 'El correo es obligatorio').isEmail(),
        check('password', 'Password es obligatorio y debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ]
    , loginUsuario);


router.get('/renew', validarJWT ,revalidarToken);


module.exports = router;
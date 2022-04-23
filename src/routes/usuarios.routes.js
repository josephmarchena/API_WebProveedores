const { Router } = require('express')
const {ObtenerDatosProveedor, loginProveedores, registrarProveedor} = require('../controllers/usuarios.controller')

const router = Router()

router.get('/datosProveedor/:IdEntidad', ObtenerDatosProveedor)
router.post('/registrarProveedor', registrarProveedor)
router.post('/loginProveedores', loginProveedores)

module.exports = router;


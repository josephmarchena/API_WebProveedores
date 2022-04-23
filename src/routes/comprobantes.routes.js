const { Router } = require('express')
const {ListarComprobantesProveedor} = require('../controllers/comprobantes.controller')

const router = Router()

router.get('/comprobantesProveedor/:IdEntidad', ListarComprobantesProveedor)

module.exports = router;
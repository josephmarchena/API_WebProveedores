const { Router } = require('express')
const { TotalPendientesPrepago, TotalCanceladoPrepago, ListadoPrepagoxFiltros } = require('../controllers/prepago.controller')


const router = Router()

router.get('/TotalPendientesPrepago/:IdEntidad/:fechadesde/:fechahasta', TotalPendientesPrepago)
router.get('/TotalCanceladoPrepago/:IdEntidad/:fechadesde/:fechahasta', TotalCanceladoPrepago)
router.post('/prepagoxProveedores', ListadoPrepagoxFiltros)

module.exports = router;
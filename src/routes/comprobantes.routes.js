const { Router } = require('express')
const {ListarComprobantesProveedor, 
        MontoFacturadoxMesComprobantes, 
            PendientesPagoComprobantes, 
                ComprobantesPagados,
                ListadoComprobantesxFiltros} = require('../controllers/comprobantes.controller')

const router = Router()

router.get('/comprobantesProveedor/:IdEntidad', ListarComprobantesProveedor)
router.get('/TotalFacturado/:IdEntidad/:fechadesde/:fechahata', MontoFacturadoxMesComprobantes)
router.get('/PendientesPagoComprobantes/:IdEntidad/:fechadesde/:fechahata', PendientesPagoComprobantes)
router.get('/ComprobantesPagados/:IdEntidad/:fechadesde/:fechahata', ComprobantesPagados)
router.post('/comprobantesxProveedores', ListadoComprobantesxFiltros)
//router.post('/comprobantesxProveedores/:IdEntidad/:NroFactura/:fechadesde/:fechahasta/:tipoDocumento/:EstadoFactura', ListadoComprobantesxFiltros)
module.exports = router;
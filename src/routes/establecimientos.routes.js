const { Router } = require('express')
const { ListadoEstablecimientos } = require('../controllers/establecimientos.controller')

const router = Router()

router.get('/ListadoEstablecimientos/:IdEntidad', ListadoEstablecimientos)


module.exports = router;
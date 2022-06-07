const { Router } = require('express')
const { ListadoContactosEstablecimientos, FiltroContactosxEstablecimientos } = require('../controllers/contactos.controller')

const router = Router()

router.get('/ListadoContactos/:IdEntidad', ListadoContactosEstablecimientos)
router.get('/FiltroContactosporEstablecimiento/:IdEntidad/:IdEstablecimiento', FiltroContactosxEstablecimientos)


module.exports = router;
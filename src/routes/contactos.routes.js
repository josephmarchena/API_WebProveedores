const { Router } = require('express')
const { ListadoContactosEstablecimientos } = require('../controllers/contactos.controller')

const router = Router()

router.get('/ListadoContactos/:IdEntidad', ListadoContactosEstablecimientos)


module.exports = router;
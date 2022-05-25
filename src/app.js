const express = require('express')
const config = require('./config')
const cors = require('cors')
const path = require('path')

const usuariosRoutes = require('./routes/usuarios.routes')
const comprobantesRoutes = require('./routes/comprobantes.routes')
const prepagoRoutes = require('./routes/prepagos.routes')
const establecimientosRoutes = require('./routes/establecimientos.routes')
const contactosRoutes = require('./routes/contactos.routes')

const app = express();

//settings
app.set('port', config.port)
/* app.set('user', config.user) */


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(usuariosRoutes)
app.use(comprobantesRoutes)
app.use(prepagoRoutes)
app.use(establecimientosRoutes)
app.use(contactosRoutes)

module.exports = app;
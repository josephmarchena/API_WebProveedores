const express = require('express')
const config = require('./config')
const cors = require('cors')

const usuariosRoutes = require('./routes/usuarios.routes')
const comprobantesRoutes = require('./routes/comprobantes.routes')

const app = express();

//settings
app.set('port', config.port)
/* app.set('user', config.user) */


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(usuariosRoutes)
app.use(comprobantesRoutes)

module.exports = app;
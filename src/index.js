const app = require('./app');
require('./database/connection');



app.listen(app.get('port'))
console.log('Server on port', app.get('port'));
/* console.log('server on port', app.get('user')); */



/* const cnx = require('./database/connection');
const sql = require('mssql');

async function getDatos() {
    try {
            let pool = await sql.connect(cnx);
            let salida = await pool.request().query('select * from de_ObservacionesFactura');
            console.log(salida.recordsets);
    } catch (error) {
        console.log(error);
    }
}
 */

/* getDatos()

module.exports = {
    getDatos: getDatos
} */
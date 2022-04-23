const {getConnection} = require('../database/connection')
const {sql} = require('../database/connection')


const bcryptjs = require('bcryptjs');

const ListarComprobantesProveedor = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .execute('sp_ListarComprobantesxProveedor', async (error, results)=> {
            if (error) {
                return  res.status(400).json('No hay información');
            }else{
              return  res.status(200).json(results.recordset);
            }
            
        })
 
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

   /*  const pool = await getConnection();
    const result = await pool.request().query('select * from de_EntidadesAccesoWebbApp')
    console.log(result);
    return res.status(200).json(result.recordset) */
 };

 module.exports =  {
    ListarComprobantesProveedor: ListarComprobantesProveedor
}
 
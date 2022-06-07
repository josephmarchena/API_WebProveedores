const {getConnection} = require('../database/connection')
const {sql} = require('../database/connection')


const ListadoContactosEstablecimientos = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .execute('usp_ListadoContactosEstablecimientos', async (error, results)=> {
            if (error) {
                return  res.status(400).json('No hay información');
            }else{
              console.log(results);
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



const FiltroContactosxEstablecimientos = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;
    const IdEstablecimiento = req.params.IdEstablecimiento

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .input('IdEstablecimiento', sql.VarChar, IdEstablecimiento)
        .execute('usp_FiltroContactosxEstablecimientos', async (error, results)=> {
            if (error) {
                return  res.status(400).json('No hay información');
            }else{
              console.log(results);
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
    ListadoContactosEstablecimientos: ListadoContactosEstablecimientos,
    FiltroContactosxEstablecimientos: FiltroContactosxEstablecimientos,
}
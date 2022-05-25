const {getConnection} = require('../database/connection')
const {sql} = require('../database/connection')



const TotalPendientesPrepago = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;
    const fechadesde = req.params.fechadesde;
    const fechahasta = req.params.fechahata;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .input('fechadesde', sql.VarChar, fechadesde)
        .input('fechahasta', sql.VarChar, fechahasta)
        .execute('usp_TotalPendientes_Prepago', async (error, results)=> {
            if (error) {
                return  res.status(400).json('No hay información');
            }else{
              console.log(results);
                if (results.recordset == "") {
                  //console.log("El sp no tiene datos");
                  return  res.status(200).json({Dolares: '0.00', Soles: '0.00'});
                }else {
                    //console.log("El sp tiene datos");
                    if (results.recordset[0].Dolares == '0'){
                      results.recordset[0].Dolares = '0.00'
                    }else if (results.recordset[0].Soles == '0'){
                      results.recordset[0].Soles = '0.00'
                    }
                    return  res.status(200).json(results.recordset[0]);
                }
              
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


const TotalCanceladoPrepago = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;
    const fechadesde = req.params.fechadesde;
    const fechahasta = req.params.fechahata;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .input('fechadesde', sql.VarChar, fechadesde)
        .input('fechahasta', sql.VarChar, fechahasta)
        .execute('usp_TotalCancelado_Prepago', async (error, results)=> {
            if (error) {
                return  res.status(400).json('No hay información');
            }else{
              console.log(results);
              if (results.recordset == "") {
                  //console.log("El sp no tiene datos");
                  return  res.status(200).json({Dolares: '0.00', Soles: '0.00'});
              }else {
                  //console.log("El sp tiene datos");
                  if (results.recordset[0].Dolares == '0'){
                    results.recordset[0].Dolares = '0.00'
                  }else if (results.recordset[0].Soles == '0'){
                    results.recordset[0].Soles = '0.00'
                  }
                  return  res.status(200).json(results.recordset[0]);
              }
              
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


const ListadoPrepagoxFiltros = async (req, res) => {
    
    const IdEntidad = req.body.IdEntidad;
    const NroFile = req.body.NroFile;
    const fechadesde = req.body.fechadesde;
    const fechahasta = req.body.fechahasta;
    const NroPrepago = req.body.NroPrepago;
    const EstadoPrepago = req.body.EstadoPrepago;

    console.log(IdEntidad, NroFile, fechadesde, fechahasta, NroPrepago, EstadoPrepago);

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .input('NroFile', sql.VarChar, NroFile)
        .input('fechadesde', sql.VarChar, fechadesde)
        .input('fechahasta', sql.VarChar, fechahasta)
        .input('NroPrepago', sql.VarChar, NroPrepago)
        .input('EstadoPrepago', sql.VarChar, EstadoPrepago)
        .execute('usp_consultar_Prepagox_filtros_proveedores_v1', async (error, results)=> {
            if (error) {
                console.log(error);
                return  res.status(400).json('No hay información en prepagos');
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
    TotalPendientesPrepago: TotalPendientesPrepago,
    TotalCanceladoPrepago: TotalCanceladoPrepago,
    ListadoPrepagoxFiltros: ListadoPrepagoxFiltros,
}

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

 const MontoFacturadoxMesComprobantes = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;
    const fechadesde = req.params.fechadesde;
    const fechahata = req.params.fechahata;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .input('fechadesde', sql.VarChar, fechadesde)
        .input('fechahata', sql.VarChar, fechahata)
        .execute('usp_TotalFacturadoxMes_Comprobantes_3', async (error, results)=> {
            if (error) {
                return  res.status(400).json('No hay información');
            }else{
                console.log(results.recordset);
              return  res.status(200).json(results.recordset[0]);
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


 const PendientesPagoComprobantes = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;
    const fechadesde = req.params.fechadesde;
    const fechahata = req.params.fechahata;

    try {
        const pool = await getConnection();
        const result = await pool.request()
         .input('IdEntidad', sql.VarChar, IdEntidad)
         .input('fechadesde', sql.VarChar, fechadesde)
         .input('fechahata', sql.VarChar, fechahata)
         .execute('usp_PendientePago_Comprobantes', async (error, results)=> {
            if (error) {
                return  res.status(400).json('No hay información');
            }else{
              return  res.status(200).json(results.recordset[0]);
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


 const ComprobantesPagados = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;
    const fechadesde = req.params.fechadesde;
    const fechahata = req.params.fechahata;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .input('fechadesde', sql.VarChar, fechadesde)
        .input('fechahata', sql.VarChar, fechahata)
        .execute('usp_Pagados_Comprobantes', async (error, results)=> {
            if (error) {
                return  res.status(400).json('No hay información');
            }else{
              return  res.status(200).json(results.recordset[0]);
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


 const ListadoComprobantesxFiltros = async (req, res) => {
    
    const IdEntidad = req.body.IdEntidad;
    const NroFactura = req.body.NroFactura;
    const fechadesde = req.body.fechadesde;
    const fechahasta = req.body.fechahasta;
    const tipoDocumento = req.body.tipoDocumento;
    const EstadoFactura = req.body.EstadoFactura;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .input('NroFactura', sql.VarChar, NroFactura)
        .input('fechadesde', sql.VarChar, fechadesde)
        .input('fechahasta', sql.VarChar, fechahasta)
        .input('tipoDocumento', sql.VarChar, tipoDocumento)
        .input('EstadoFactura', sql.VarChar, EstadoFactura)
        .execute('usp_consultar_Comprobantesx_filtros_proveedores_v1', async (error, results)=> {
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
    ListarComprobantesProveedor: ListarComprobantesProveedor,
    MontoFacturadoxMesComprobantes: MontoFacturadoxMesComprobantes,
    PendientesPagoComprobantes: PendientesPagoComprobantes,
    ComprobantesPagados: ComprobantesPagados,
    ListadoComprobantesxFiltros: ListadoComprobantesxFiltros
}
 
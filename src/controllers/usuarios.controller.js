const {getConnection} = require('../database/connection')
const {sql} = require('../database/connection')


const bcryptjs = require('bcryptjs');
 


 const registrarProveedor = async (req, res) =>{
     const IdEntidad = req.body.IdEntidad;
     const UserName = req.body.UserName;
     const Contrasenha = req.body.Contrasenha;
     const DNI = req.body.DNI;
     const Correo = req.body.Correo;
     let passswordHassh = await bcryptjs.hash(Contrasenha, 8)

    //Validacion del correo que no son iguales
    try {
        const pool = await getConnection();
        await pool
        .request()
        .input("IdEntidad", sql.Int, IdEntidad)
        .input("UserName", sql.VarChar, UserName)
        .input("Contrasenha", sql.VarChar, passswordHassh)
        .input("DNI", sql.VarChar, DNI)
        .input("Correo", sql.VarChar, Correo)
        .execute("sp_IngresarProveedor", async (error, results)=> {
            if (error) {
                console.log(error);
            }else{
                res.status(200).json({IdEntidad ,UserName,  Correo });
            }
        })
        
        

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

 }
 
 const loginProveedores = async (req, res) => {
    const user = req.body.Correo;
    const pass = req.body.Contrasenha;
    let passswordHassh = await bcryptjs.hash(pass, 8);

    try {
        if (user && pass) {
            const pool = await getConnection();
            const resultado = await pool
            .request()
            .input('correo', sql.VarChar, user)
            .execute('sp_ConsultarUsuario_Login', async (error, results) => {
                
                if (results.recordset.length == 0 || !(await bcryptjs.compare(pass, results.recordset[0].Contrasenha))) {
                    return res.status(400).json({ mensaje: 'Email y Password incorrectos'})
                }else{
                    console.log(results);
                    console.log(results.recordset[0]);
                    let IdEntidad = results.recordset[0].IdEntidad;
                    let RazonSocial = results.recordset[0].RazonSocial;
                    return res.status(200).json({ IdEntidad, RazonSocial })
                }
                
            }) 
           
        }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

 }


 const ObtenerDatosProveedor = async (req, res) => {
    
    const IdEntidad = req.params.IdEntidad;

    try {
        const pool = await getConnection();
        const result = await pool.request()
        .input('IdEntidad', sql.VarChar, IdEntidad)
        .execute('sp_ObtenerDatosUsuario_DatosGenerales', async (error, results)=> {
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

module.exports =  {
    ObtenerDatosProveedor: ObtenerDatosProveedor,
    loginProveedores: loginProveedores,
    registrarProveedor: registrarProveedor
}
    
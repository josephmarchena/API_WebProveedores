const sql = require('mssql');


const dbSettings = {

user: 'sa',
password: 'Coltur1957',
server: '167.250.204.13\\COLTUR',
database: 'Viajes',
options: {
    encrypt : true,
    instancename : 'COLTUR',
    }

}

async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    
    } catch (error) {
        console.log(error);
    }
}


 module.exports = {
     getConnection : getConnection,
     sql
 }
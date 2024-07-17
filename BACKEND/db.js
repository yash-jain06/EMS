const Pool=require('pg').Pool;
const pool=new Pool({
   user:'postgres',
   database:'employee',
   host:'localhost',
   password:'Yash0609!',
   port:5500
   })

   module.exports=pool;
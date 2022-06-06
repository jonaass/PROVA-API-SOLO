import mysql from 'mysql2/promise'

const con = await mysql.connection({

    HOST=process.env,
    USER=mysql_,
    PWD=1234

})


export{ con }
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'healthyLife'
});

conn.connect(function(err){
    if(err){
        console.log("Fatal error connecting to data base!" + "\n" + err.code + "\nCode: " + err.errno);
        return;
    }
    
    console.log("Connection with database established");
});

module.exports = conn;
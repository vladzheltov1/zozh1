const mysql = require('mysql2');

// Local server
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

// Technically it works and even logs errors to console, but do i still need it?
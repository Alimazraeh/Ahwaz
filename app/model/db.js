'user strict'

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ahwaz'
});

con.connect(function(error){
    if(error) throw error;
});

module.exports = con;
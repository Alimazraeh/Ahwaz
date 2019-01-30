var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var routes = require('./app/routes/appRoutes'); 

app = express();
port = process.env.port || 3000;

//database
var databaseMC = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ahwaz'
});
databaseMC.connect();

// server start
app.listen(port);

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register routes
routes(app)
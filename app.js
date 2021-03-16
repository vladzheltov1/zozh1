// Include libs
const express = require('express');
const exhbs = require('express-handlebars');
const mysql = require('mysql2');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

// ----------------------------------------- //

//Require modules
const router = require('./modules/router');

// ------------------------------------------//


const PORT = process.env.PORT || 3001;


const app = express();


const hbs = exhbs({
    extname: 'hbs'
});

app.engine('hbs', hbs);
app.set('view engine', 'hbs');
app.use('/public', express.static('public'));
app.use(cookieParser());
app.use(router);

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "supersecretwordthatnooneknows"
}));


function start() {
    try{
        app.listen(PORT, () => {
            console.log("Server has been started on port: " + PORT);
        });
    }
    catch(e){
        console.log(e);
    }
}

start();
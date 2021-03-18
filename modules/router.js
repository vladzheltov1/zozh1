const { Router } = require('express');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

const db = require('../modules/db');
const conn = require('../modules/db');

const router = Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false })

// Titles for cards
const cardTitle = ['Основы Здорового Образа Жизни', 'Мы есть то, что мы едим', 'Движение - жизнь'];


// Routes
router.get("/", function (req, res) {
    res.render('landing', {'title': "HealthyLife - твоя жизнь в твоих руках!"});
});
router.get("/about", function (req, res) {
    res.render('about', {'title': "О проекте HealthyLife"});
});
router.get("/start", function (req, res) {
    res.render('start', {'title': "Все Задания"});
});
router.get("/card", function (req, res) {
    res.redirect('/start');
});
router.get("/card/1", function (req, res) {
    res.render('cards/card1', {'title': cardTitle[0] + " (задания)"});
});
router.get("/card/2", function (req, res) {
    res.render('cards/card2', {'title': cardTitle[1] + " (задания)"});
});
router.get("/card/3", function (req, res) {
    res.render('cards/card3', {'title': cardTitle[2] + " (задания)"});
});
router.get('/*', function(req, res){
    res.render('404', {'title': "Ошибка! Страница не найдена!"});
});

// router.get("/login", function (req, res) {
//     res.render('login', {'title': "Вход - HealthyLife"});
// });
// router.get("/signup", function (req, res) {
//     res.render('signup', {'title': "Регистрация - HealthyLife"});
// });


// POST
// router.post('/login', function(req, res){
// });

// router.post('/signup', urlencodedParser, function(req, res){
// });

// Export module
module.exports = router;


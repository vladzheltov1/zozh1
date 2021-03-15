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
    res.render('landing', {'title': "HealthyLife"});
});
// router.get("/profile", function (req, res) {
//     res.redirect('/');
// });
// router.get("/privacy", function (req, res) {
//     res.render('policy', {'title': "Политика конфиденциальности"});
// });
// router.get("/login", function (req, res) {
//     res.render('login', {'title': "Вход - HealthyLife"});
// });
// router.get("/signup", function (req, res) {
//     res.render('signup', {'title': "Регистрация - HealthyLife"});
// });
router.get("/about", function (req, res) {
    res.render('about', {'title': "О HealthyLife"});
});
router.get("/start", function (req, res) {
    res.render('start', {'title': "Задания"});
});
router.get("/card", function (req, res) {
    res.redirect('/start');
});
router.get("/card/1", function (req, res) {
    res.render('cards/card1', {'title': cardTitle[0] + " - карточка"});
});
router.get("/card/2", function (req, res) {
    res.render('cards/card2', {'title': cardTitle[1] + " - карточка"});
});
router.get("/card/3", function (req, res) {
    res.render('cards/card3', {'title': cardTitle[2] + " - карточка"});
});
// router.get("/secret/banana", function (req, res) {
//     res.render('banana', {'title': "Вращающийся банан 🍌"});
// });
// router.get('/demo', function(req, res){
//     res.render('demo', {'title': "DEMO!"});
// });
// router.get('/updates', function(req, res){
//     res.render('updates', {'title': "Обновления"});
// });
router.get('/*', function(req, res){
    res.render('404', {'title': "Страница не найдена!"});
});


// router.post('/feedback/send', urlencodedParser, function(req, res){
//     // if(req.body.name == "" || req.body.email == "" || req.body.msg == ""){
//     //     res.redirect('/?e=ef');
//     // }
// });

// router.post('/login', function(req, res){
    
// });

// router.post('/signup', urlencodedParser, function(req, res){
    
// });

// Export module
module.exports = router;


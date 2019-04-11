const rootPath = "..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('main/welcome', {
		title: lang.main_title,
		user: req.user,
		loginError: req.flash('loginError'),
	});
});

router.get('/develop', (req, res) => {
	res.render('main/develop', {
		title: lang.main_title,
		user: req.user,
		loginError: req.flash('loginError'),
	});
});

//--------------------------------------------------------------------------------

router.get('/d/main', (req, res) => {
	res.render('main/main');
});

router.get('/d/question', (req, res) => {
	res.render('main/question');
});

router.get('/d/join', (req, res) => {
	res.render('user/join');
});

router.get('/d/login', (req, res) => {
	res.render('user/login');
});

router.get('/d/rent/first', (req, res) => {
	res.render('rent/rent_first');
});

router.get('/d/rent/second', (req, res) => {
	res.render('rent/rent_second');
});

router.get('/d/rent/last', (req, res) => {
	res.render('rent/rent_last');
});

router.get('/d/my', (req, res) => {
	res.render('user/my');
});

//--------------------------------------------------------------------------------

router.get('/about', (req, res) => {
	res.render('main/about');
});

module.exports = router;
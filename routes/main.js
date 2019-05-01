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

router.get('/d/main', (req, res) => { // 수정 필요
	res.render('main/main');
});

router.get('/d/question', (req, res) => { // 수정 필요
	res.render('main/question');
});

router.get('/d/join', (req, res) => { // 수정 필요
	res.render('user/join');
});

router.get('/d/login', (req, res) => { // 완성
	res.render('user/login');
});

router.get('/d/findId', (req,res) => { // login -> 아이디 찾기
	res.render('user/find_id');
});

router.get('/d/findPassword', (req,res) => { // login -> 비밀번호 찾기
	res.render('user/find_password');
});

router.get('/d/rent/first', (req, res) => { // 제작 필요
	// res.render('rent/rent_first_temp', {user: res.locals.currentUser});
	res.render('rent/rent_first', {user: res.locals.currentUser});
});

router.get('/d/rent/second', (req, res) => { // 수정 필요
	res.render('rent/rent_second');
});

router.get('/d/rent/last', (req, res) => { // 수정 필요
	res.render('rent/rent_last');
});

router.get('/d/my', (req, res) => { // 제작 필요
	res.render('user/my');
});

//--------------------------------------------------------------------------------

router.get('/about', (req, res) => {
	res.render('main/about');
});

module.exports = router;
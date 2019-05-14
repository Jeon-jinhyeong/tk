const rootPath = "..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

router.get('/', (req, res) => {
	res.render('main/main');
});

router.get('/question', (req, res) => { // 수정 필요
	res.render('main/question');
});

router.get('/join', (req, res) => { // 수정 필요
	res.render('user/join');
});

router.get('/login', (req, res) => { // 완성
	res.render('user/login');
});

router.get('/findId', (req,res) => { // login -> 아이디 찾기
	res.render('user/find_id');
});

router.get('/findPassword', (req,res) => { // login -> 비밀번호 찾기
	res.render('user/find_password');
});

router.get('/rent/last', (req, res) => { // 수정 필요
	res.render('rent/rent_last');
});

router.get('/my', (req, res) => { // 제작 필요
	res.render('user/my');
});

module.exports = router;
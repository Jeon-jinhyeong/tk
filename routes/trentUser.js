const rootPath = "..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Lib
const loginChecker = require(`${rootPath}/lib/loginChecker`);

// 사용자 프로필 페이지
/* 
  자신의 프로필은 로그인을 해야 볼 수 있으므로 loginChecker.isLoggedIn 미들웨어 사용
  isLoggedIn()가 ture여야 next()가 호출되어 res.render가 있는 미들웨어로 넘어갈수 있으며,
  false면 메인 페이지로 이동한다.
*/
router.get('/profile', loginChecker.isLoggedIn, (req, res) => {
  res.render('profile', { 
    title: lang.profile_title, 
    user: req.user 
  });
});

// 사용자 가입 페이지
/* 
  회원가입 페이지는 로그인을 하지 않은 사람에게만 보여야 함으로 loginChecker.isNotLoggedIn 미들웨어로 사용
  isNotLoggedIn()가 ture여야 next()가 호출되어 res.render가 있는 미들웨어로 넘어갈수 있으며,
  false면 메인 페이지로 이동한다.
*/
router.get('/join', loginChecker.isNotLoggedIn, (req, res) => {
  res.render('main/join', {
    title: lang.join_title, 
    user: null,
    joinError: req.flash('joinError'),
  });
});

// 사용자 세션 확인 페이지
router.get('/check_session', (req, res) => {
    if (req.session) {
      return res.send(req.session.passport.user)
    } 
    return res.send(lang.no_session)
});

// 사용자 로그인 페이지
router.get('/login', loginChecker.isNotLoggedIn, (req, res) => {
  res.render('main/login', {
    title: lang.login_title, 
    user: null,
    joinError: req.flash('joinError'),
  });
});

// 사용자 로그아웃 페이지
router.get('/logout', loginChecker.isLoggedIn, (req, res) => {
    req.session.destroy();
    req.logout();
    res.redirect('/develop');
});

module.exports = router;
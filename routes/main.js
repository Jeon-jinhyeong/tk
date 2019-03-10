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

router.get('/about', (req, res) => {
    res.render('main/about');
});

module.exports = router;
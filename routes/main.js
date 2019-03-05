const router = require('express').Router();
session = require('express-session');
const loginChecker = require('../lib/loginChecker'); 

const lang = require('../lib/lang/ko.json'); 

router.get('/', (req, res, next) => {
  res.render('main/welcome', {
      title     : lang.main_title, 
      user: req.user,
      loginError: req.flash('loginError'),
  });
  console.log(req.user)
});

router.get('/about', (req, res) => {
    res.render('main/about');
});

module.exports = router;
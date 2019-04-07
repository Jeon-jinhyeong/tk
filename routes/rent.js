const rootPath = "..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Models
// const { Xlsx } = require(`${rootPath}/models`);

// Lib - 
const loginChecker = require(`${rootPath}/lib/loginChecker`);

// Lib 
router.get('/', /*loginChecker.isLoggedIn, */function (req, res) {
  // console.log(res.locals.currentUser.dataValues);

  res.render('rent/rent', {user: res.locals.currentUser});
});

module.exports = router;
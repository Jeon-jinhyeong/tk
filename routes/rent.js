const rootPath = "..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Models
// const { Xlsx } = require(`${rootPath}/models`);

// Lib - 
const loginChecker = require(`${rootPath}/lib/loginChecker`);

// Lib 

router.get('/', function(req, res) {
  res.render('rent/rent');
});

module.exports = router;
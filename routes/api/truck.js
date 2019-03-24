const rootPath = "../..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Models
// const {Xlsx} = require(`${rootPath}/models`);

// Lib - 
const loginChecker = require(`${rootPath}/lib/loginChecker`);

// 파일 업로드 처리
router.post('/', async (req, res, next)  => {

  res.res(true);
});

module.exports = router;
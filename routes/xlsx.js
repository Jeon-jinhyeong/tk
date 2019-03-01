const rootPath = "..";
const router = require('express').Router();

const loginChecker = require(`${rootPath}/lib/loginChecker`);
const XLSX = require("xlsx");

const lang = require(`${rootPath}/lib/lang/ko.json`);

const { Xlsx } = require(`${rootPath}/models`);


router.get('/', function(req, res, next) {
  res.render('xlsx/upload');
});

router.get("/:xlsxId", function(req, res, next){
  Xlsx.findOne({_id : req.params.xlsxId}, (err, xlsx) => {
    if(err) return res.json(err);
  
    const workbook = XLSX.readFile(xlsx.path);
    const worksheet = workbook.Sheets["Sheet1"]

    res.json(worksheet)
  });
});

module.exports = router;
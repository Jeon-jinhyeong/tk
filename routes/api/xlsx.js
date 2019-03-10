const rootPath = "../..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Models
const {Xlsx} = require(`${rootPath}/models`);

// Lib - 
const loginChecker = require(`${rootPath}/lib/loginChecker`);


const xlsxRootPath = `${rootPath}/xlsx`;

const multer = require("multer");
const path = require("path");
const fs = require('fs');
const moment = require('moment');
moment.locale('ko');

const storage = multer.diskStorage({
  destination: (req, file ,callback) => {
    callback(null, "xlsx/")
  },
  
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname); // 확장자
    const basename = path.basename(file.originalname, extension); // 파일명
    const date = moment(Date.now()).format("YYMMDD_HHmmss");
    
    callback(null, basename + "_" + date + extension);
  }
});

const upload = multer({
  storage: storage
});

// 파일 업로드 처리
router.post('/', upload.single("file"), async (req, res, next)  => {
  const file = req.file;;
  const userId = req.session.passport.user;

  const xlsx = {
      title: file.filename,
      path: file.path,
      userId: userId,
  }

  await Xlsx.create(xlsx);

  res.res(true);
});

module.exports = router;
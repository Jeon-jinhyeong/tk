const rootPath = "../..";
const router = require('express').Router();
// const { ?? } = require(`${rootPath}/models`);

const loginChecker = require(`${rootPath}/lib/loginChecker`);

const XLSX = require("xlsx");
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const moment = require('moment');
moment.locale('ko');

const xlsxRootPath = `${rootPath}/xlsx`;

const { Xlsx } = require(`${rootPath}/models`);

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
})

// 파일 업로드 처리
router.post('/', upload.single("file"), async (req, res, next)  => {

    const file = req.file;;

    console.log(file);

    const xlsx = {
        title : file.filename,
        path : file.path
    }

    await Xlsx.create(xlsx);

    res.json(file);
});

module.exports = router;
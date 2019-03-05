const rootPath = "..";
const router = require('express').Router();

const loginChecker = require(`${rootPath}/lib/loginChecker`);
const XLSX = require("xlsx");
const workSheet = require("xlsx-workbook").Worksheet;
const lang = require(`${rootPath}/lib/lang/ko.json`);
const { Xlsx } = require(`${rootPath}/models`);


router.get('/', function(req, res) {
  res.render('xlsx/upload');
});

router.get("/:xlsxId", async (req, res) => {

  const ws = new workSheet("Result");

  const xlsxData = await Xlsx.findOne({ where : { id : req.params.xlsxId } });
  //console.log(xlsxData.path);
  const workbook = await XLSX.readFile("./" + xlsxData.path);
  //console.log(workbook);
  const sheetName = await workbook.SheetNames;

  const data = await XLSX.utils.sheet_to_json(workbook.Sheets[sheetName[0]]);

  // const ID = wb.add("ID");
  // const money = wb.add("실수령액(원)");

  for(let i = 0; i < data.length; i++) {

        if (i == 0) {
          ws[0][0] = "ID";
          ws[0][1] = "실수령액(원)";
        }

        data[i]["실수령액(원)"] = data[i]["실수령액(원)"] - 10000;
        ws[i + 1][0] = i + 1;
        ws[i + 1][1] = data[i]["실수령액(원)"];
  }
  
  ws.save("./xlsx/test_result.xlsx");

  res.json(data);
});

module.exports = router;
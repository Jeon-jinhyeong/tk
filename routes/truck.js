const rootPath = "..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

router.get('/getMinutePrice/:truckId', (req, res) => {
  // req.params.turckId
  // TODO: 차량의 랜트가격을 나타내야함
  console.log('aa');
  
  return res.send({
    pricePerMinute: '10000'
  });
});

module.exports = router;
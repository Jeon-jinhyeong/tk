const rootPath = "..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Models
const { Coupon } = require(`${rootPath}/models`);

// Lib - 
const loginChecker = require(`${rootPath}/lib/loginChecker`);

// Lib 
router.get('/', loginChecker.isLoggedIn, async function (req, res) {
  const coupons = await Coupon.findAll({where: {
    userId: res.locals.currentUser.dataValues.userID
  }});


  console.log(coupons[0].name);
  res.render('rent/rent_first', {user: res.locals.currentUser.dataValues, coupons: coupons});
});

module.exports = router;
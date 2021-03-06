const rootPath = "../..";

const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const axios = require('axios');

const lang = require(`${rootPath}/lib/lang/ko.json`);
const {User} = require(`${rootPath}/models`);
const loginChecker = require(`${rootPath}/lib/loginChecker`);

//핸드폰인증
router.post('/smsVerification', (req, res) => {
  const phoneNumber = req.body.phone;

  axios({
		method: 'POST',
		JSON: true,
    url: 'https://api-sens.ncloud.com/v1/sms/services/ncp:sms:kr:255808119105:trentworld/messages',
    headers: {
      'Content-Type': 'application/json',
      'X-NCP-auth-key': 'SOfcXF6Z78fZWXSND7YX',
      'X-NCP-service-secret': '2714cca431e8492dbd41f09156f673ce'
    },
    data: {
			"type": "sms",
			"contentType": "COMM",
    	"countryCode": "82",
      "from": "01037649905",
      "to": [`${phoneNumber}`],
      "content": "TRENT 인증번호 123456입니다."
    }
  });

  return res.redirect(req.get('referer'));
});

// 회원가입
router.post('/join', loginChecker.isNotLoggedIn, async (req, res, next) => {
	const {  
		id, 
		password, 
		email, 
		firstname, 
		lastname, 
		phone, 
		postcode, 
		address, 
		details,			
		classification, 
		numberArea, 
		number_1, 
		number_2, 
		number_3, 
		number_4,
		issueyear, 
		issuemonth, 
		issueday, 
		dueyear, 
		duemonth, 
		dueday 
	} = req.body;

	const user = await User.find({where: {userID: id}});
	if (user) {
		req.flash('joinError', lang.already_exist_id);
		return res.redirect('/join');
	}
		
	// 비밀번호를 12자리로 해시
	const hash = await bcrypt.hash(password, 12);

	await User.create({
			userID: id,
			password: hash,
			email,
			firstname,
			lastname,
			phone,
			postcode,
			address,
			details,
			classification,
			numberArea,
			number_1,
			number_2,
			number_3,
			number_4,
			issueyear,
			issuemonth,
			issueday,
			dueyear,
			duemonth,
			dueday
	});

	return res.redirect('/');
});

router.post('/loginauth', loginChecker.isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
		if (authError) {
			return next(authError);
		}

		if (!user) {
			req.flash('loginError', info.message);
			return res.redirect('/login');
		}
		
		return req.login(user, (loginError) => {
			if (loginError) {
				return next(loginError);
			}

			return res.redirect('/rent');
		});
  })(req, res, next);
});

// api/user/is_exist_id?
router.get('/is_not_exist_id', async (req, res, next) => {	
	const user = await User.findOne({where: {userID: req.query.id}});

	if (user != null) {
		return res.send(false)
	}

	return res.send(true);
});

// api/user/is_exist_email/:email
router.get('/is_not_exist_email', async (req, res, next) => {	
  const user = await User.findOne({where: {email: req.query.email}});
	
	if (user != null) {
		return res.send(false)
	}

	return res.send(true);
});

module.exports = router;
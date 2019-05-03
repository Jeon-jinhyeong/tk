const rootPath = "../..";

const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

const lang = require(`${rootPath}/lib/lang/ko.json`);
const {User} = require(`${rootPath}/models`);
const loginChecker = require(`${rootPath}/lib/loginChecker`);

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
		return res.redirect('/d/join');
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

	return res.redirect('/d/main');
});

router.post('/loginauth', loginChecker.isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => {
		if (authError) {
			return next(authError);
		}

		if (!user) {
			req.flash('loginError', info.message);
			return res.redirect('/d/login');
		}
		
		return req.login(user, (loginError) => {
			if (loginError) {
				return next(loginError);
			}

			return res.redirect('/d/rent/first');
		});
  })(req, res, next);
});

// api/user/is_exist_id?
router.get('/is_exist_id', async (req, res, next) => {	
	const user = await User.findOne({where: {userID: req.query.id}});

	if (user != null) {
		return res.send(false)
	}

	return res.send(true);
});

// api/user/is_exist_email/:email
router.get('/is_exist_email', async (req, res, next) => {	
  const user = await User.findOne({where: {email: req.query.email}});
	
	if (user != null) {
		return res.send(false)
	}

	return res.send(true);
});

module.exports = router;
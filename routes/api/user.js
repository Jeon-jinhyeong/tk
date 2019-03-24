const rootPath = "../..";
const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const lang = require(`${rootPath}/lib/lang/ko.json`);
const {
	User
} = require(`${rootPath}/models`);


const loginChecker = require(`${rootPath}/lib/loginChecker`);

//
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

	try {
		const user = await User.find({
			where: {
				userID: id
			}
		});
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
			dueday,
		});

		return res.redirect('/develop');
	} catch (error) {
		console.error(error);
		return next(error);
	}
});


router.post('/loginauth', loginChecker.isNotLoggedIn, (req, res, next) => {
	passport.authenticate('local', (authError, user, info) => {

		if (authError) {
			console.error(authError);
			return next(authError);
		}

		if (!user) {
			req.flash('loginError', info.message);
			return res.redirect('/develop');
		}

		return req.login(user, (loginError) => {
			if (loginError) {
				console.error(loginError);
				return next(loginError);
			}

			return res.redirect('/develop');
		});
	})(req, res, next);
});

module.exports = router;
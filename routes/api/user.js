const rootPath = "../..";
const lang = require(`${rootPath}/lib/lang/ko.json`);

const router = require('express').Router();

// Models
const { User } = require(`${rootPath}/models`);

// Lib - 
const loginChecker = require(`${rootPath}/lib/loginChecker`);

// Lib 
const bcrypt = require('bcrypt');
const passport = require('passport');

//
router.post('/join', loginChecker.isNotLoggedIn, async (req, res, next) => {
  const { email, firstName, lastName, password } = req.body;

  try {
      const user = await User.find({ where: { email } });
      if (user) {
          req.flash('joinError', lang.already_exist_email);
          return res.redirect('/join');
      }
      console.log(password)
      
      // 비밀번호를 12자리로 해시
      const hash = await bcrypt.hash(password, 12);

      await User.create({
          email,
          password: hash,
          firstName,
          lastName,
      });

      return res.redirect('/');
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
          return res.redirect('/');
      }
      
      return req.login(user, (loginError) => {
          if (loginError) {
              console.error(loginError);
              return next(loginError);
          }

          return res.redirect('/');
      });
  })(req, res, next);
});

module.exports = router;
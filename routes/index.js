const router = require('express').Router();

const createError = require('http-errors');

const mainRouter = require('./main'),
      userRouter = require('./user'),
      xlsxRouter = require('./xlsx'),
      postRouter = require('./post'),
      rentRouter = require('./rent');

router.use('/', mainRouter);
router.use('/user', userRouter);
router.use("/post", postRouter);
router.use("/xlsx", xlsxRouter);
router.use("/rent", rentRouter);

// 404 : Client 에러 - 잘못된 URL
router.use((req, res, next)  => {
  next(createError(404));
});

// ?
router.use((err, req, res, next)  => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = router;
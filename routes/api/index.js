const router = require('express').Router();

const mainRouter = require('./main'),
      userRouter = require('./user'),
      xlsxRouter = require('./xlsx'),
      postRouter = require('./post');

router.use('/', mainRouter);
router.use('/user', userRouter);
router.use("/post", postRouter);
router.use("/xlsx", xlsxRouter);

module.exports = router;
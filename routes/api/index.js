const router = require('express').Router();

const trentUserRouter = require('./trentUser'),
      userRouter = require('./user'),
      xlsxRouter = require('./xlsx'),
      postRouter = require('./post'),
      rentRouter = require('./rent');

router.use('/trentUser', trentUserRouter);
router.use('/user', userRouter);
router.use("/post", postRouter);
router.use("/xlsx", xlsxRouter);
router.use("/rent", rentRouter);

module.exports = router;
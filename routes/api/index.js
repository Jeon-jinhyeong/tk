const router = require('express').Router();

const userRouter = require('./user'),
      xlsxRouter = require('./xlsx'),
      postRouter = require('./post'),
      truckRouter = require('./truck'),
      rentRouter = require('./rent');

router.use('/user', userRouter);
router.use("/post", postRouter);
router.use("/xlsx", xlsxRouter);
router.use("/truck", truckRouter);
router.use("/rent", rentRouter);

module.exports = router;
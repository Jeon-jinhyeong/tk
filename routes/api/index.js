const router = require('express').Router();

const userRouter = require('./user'),
      truckRouter = require('./truck'),
      rentRouter = require('./rent');

router.use('/user', userRouter);
router.use("/truck", truckRouter);
router.use("/rent", rentRouter);

module.exports = router;
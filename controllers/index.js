const router = require('express').Router();

const apiRoutes = require('./api');

const trailRoutes = require('./trails');

router.use('/', trailRoutes);

router.use('/api', apiRoutes);

module.exports = router;
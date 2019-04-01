const express = require('express');
const router = express.Router();
const users = require('./users');
const { authentication } = require('../middlewares/middlewares');
const controller = require('../controllers/user');

router.use('/api/users', authentication, users);
router.post('/api/signin', controller.signIn);
router.post('/api/signup', controller.create);
router.get('/api');

module.exports = router;
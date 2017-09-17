const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.js");

router.post('/user/signUp', userController.signUp);
router.post('/user/signIn', userController.signIn);
router.get('/user/isLogin', userController.isLogin);
router.get('/user/logout', userController.logout);

module.exports = router;
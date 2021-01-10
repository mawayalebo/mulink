const { Router } = require('express');
const authController = require('../controllers/authController');
const route = Router();

route.get('/sign_up', authController.getSignUp);
route.post('/sign_up',authController.postSignUp);
route.get('/sign_in', authController.getSignIn);
route.post('/sign_in', authController.postSignIn);

module.exports = { route };
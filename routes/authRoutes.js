const { Router } = require('express');
const authController = require('../controllers/authController');
const router = Router();

router.get('/sign_up', authController.getSignUp);
router.post('/sign_up',authController.postSignUp);
router.get('/sign_in', authController.getSignIn);
router.post('/sign_in', authController.postSignIn);
router.get('/sign_out', authController.getSignOut);

module.exports = { router };
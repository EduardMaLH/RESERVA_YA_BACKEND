const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

router.get('/api/users', userController.getUsers.bind(userController));

module.exports = router;
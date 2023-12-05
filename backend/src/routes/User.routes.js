const express = require('express');
const jwt = require('jsonwebtoken');
const { registerUser, loginUser } = require('../controller/User.controller');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports=router
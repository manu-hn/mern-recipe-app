const express = require('express');
const jwt = require('jsonwebtoken');
const { registerUser } = require('../controller/User.controller');


const router = express.Router();

router.post('/register', registerUser);

module.exports=router
const express = require('express');
const UserSchema = require('../models/Users.model.js');
const { StatusCodes: { ACCEPTED, BAD_GATEWAY, NOT_ACCEPTABLE, NOT_FOUND, OK } } = require('http-status-codes');
const { hashPassword, isPasswordValid } = require("../utils/HashPassword.js");
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/JwtToken.js');

const registerUser = async (request, response, next) => {
    try {
        const { firstName, lastName, email, mobile, username, password } = request.body;

        const userName = await UserSchema.findOne({ username });
        const userEmail = await UserSchema.findOne({ email });
        const fullName = firstName + " " + lastName;

        if (!userName || !userEmail) {
            const hashedPassword = await hashPassword(password);

            const newUser = await UserSchema.create({ firstName, lastName, fullName, email, mobile, username, password: hashedPassword });

            return response.status(ACCEPTED).json({
                error: false, message: `Registered Successfully !`, data: {
                    fullName: newUser.fullName,
                    username: newUser.username,
                    email: newUser.email

                }
            })

        }

        return response.status(NOT_ACCEPTABLE).json({ error: true, message: "User Already Exists" });


    } catch (error) {
        next(error)
    }
}

const loginUser = async (request, response, next) => {
    try {
        const { username, password } = request.body;

        const isUserAvailable = await UserSchema.findOne({ username });

        if (!isUserAvailable) {
            return response.status(NOT_FOUND).json({ error: true, message: "User Not Found" })
        }

        const isPasswordCorrect = await isPasswordValid(password, isUserAvailable.password);

        const token = await generateToken(isUserAvailable._id, isUserAvailable.username, isUserAvailable.email)

        
        isPasswordCorrect
            ?
            response.status(OK).json({
                error: false, message: "Logged In", token, data: {
                    userId: isUserAvailable._id,
                    username: isUserAvailable.username,
                    email: isUserAvailable.email
                }
            })
        :
        response.status(NOT_ACCEPTABLE).json({ error: true, message: 'Invalid Password' })





    } catch (error) {
        next(error)
    }
}


module.exports = {
    registerUser,
    loginUser
}
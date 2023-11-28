const express = require('express');
const UserSchema = require('../models/Users.model.js');
const { StatusCodes: { ACCEPTED, BAD_GATEWAY, NOT_ACCEPTABLE } } = require('http-status-codes')


const registerUser = async (request, response, next) => {
    try {
        const { firstName, lastName, email, mobile, username, password } = request.body;

        const userName = await UserSchema.findOne({ username });
        const userEmail = await UserSchema.findOne({ email });
        const fullName = firstName + " " + lastName;

        if (!userName || !userEmail) {

            const newUser = await UserSchema.create({ firstName, lastName, fullName, email, mobile, username, password });

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

const loginUser = async () => {
    try {
        const { email, username, password} = request.body



    } catch (error) {

    }
}


module.exports = {
    registerUser
}
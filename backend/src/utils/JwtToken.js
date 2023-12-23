const jwt = require('jsonwebtoken');
require("dotenv").config();


const generateToken = async (userId, username, email) => {
    try {
        const token = await jwt.sign({ userId, username, email }, process.env.JWT_SECRET_KEY, {expiresIn : process.env.JWT_EXPIRES_IN});
        // console.log(token)
        return token

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    generateToken
}
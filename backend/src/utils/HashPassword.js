const bcrypt = require('bcryptjs')

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
   
    return hashedPassword;
}

const isPasswordValid=async (password, hashedPassword)=>{

    const isPasswordCorrect=await bcrypt.compare(password, hashedPassword);

    return isPasswordCorrect;

}

module.exports={
    hashPassword,
    isPasswordValid
}
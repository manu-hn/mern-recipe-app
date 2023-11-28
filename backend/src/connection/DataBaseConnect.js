const {connect} = require('mongoose');
require('dotenv').config();

connect(process.env.DATABASE_URL).then(()=>{
    console.log(`Database Connected`)
}).catch((err)=>{
    console.log(err)
})
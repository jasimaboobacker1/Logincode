const mongoose = require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log('Mongodb atlas succesfully connected with pfserver');
}).catch((err)=>{
       console.log(`mongodb connection failed!! Error is ${err}`);
})




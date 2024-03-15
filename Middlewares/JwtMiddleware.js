const jwt = require('jsonwebtoken')




const jwtMiddleware = (req,res,next)=>{
    console.log("Inside Middleware");
    const token = req.headers['authorization'].split(" ")[1]
    try{
        const jwtResponse = jwt.verify(token,"supersecretekey1234")
        console.log(jwtResponse);
        req.payload = jwtResponse.userId
        next()
    }catch(err){
        res.status(401).json("Authorization failed!!! Please Login")
    }
   
}

module.exports = jwtMiddleware
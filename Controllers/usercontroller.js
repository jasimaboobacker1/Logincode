const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

const sendRegistrationEmail = (email) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: 'jasimaboobacker123@gmail.com',
        pass: 'sttfdmtezpaczref',
      },
    });
  
    const mailOptions = {
      from: 'jasimaboobacker123@gmail.com',
      to: email,
      subject: 'Welcome to Your App',
      text: 'Thank you for registering on our app!',
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending registration email:', error);
      } else {
        console.log('Registration email sent:', info.response);
      }
    });
  };

exports.register = async(req,res) => {
    console.log('Inside register controller function');
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exist!!! Please Login")
        }else{
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            sendRegistrationEmail(email);
            res.status(200).json(newUser)
        }
        }
        catch(err){
            res.status(401).json(`Register API Failed , Error : ${err}`)
        }
    }

    exports.login = async(req,res)=>{
      console.log('inside login function');
      const {email,password}= req.body
      try{
          const existingUser = await  users.findOne({email,password})
        if(existingUser){
          const token = jwt.sign({userId:existingUser._id},"supersecretekey1234")
          res.status(200).json({
              existingUser,token
          })
        }else{
          res.status(406).json("Incorrect Email or Password")
        } 
      }
      catch(err){
          res.status(401).json(`Login API Failed, Error : ${err}`)
      }
  }
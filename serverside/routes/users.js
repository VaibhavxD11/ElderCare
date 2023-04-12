const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";
// const Joi = require('joi');
// const passwordComplexity = require("joi-password-complexity");


router.post("/register", async (req, res) => {
  const { guardName, elderName, address, email, number, password, uid } = req.body;

  const error = validate(req.body);
  
  if (!guardName || !elderName || !address || !email || !number || !password) {
      return res
        .status(422)
        .send({ message: "Please fill all the fields properly!! " });
  }
  if (number.length != 10) {
    return res.status(422).send({ message: "Please enter 10 digit Number!" });
  }
  
    try {
      let userExist = await User.findOne({ email: email });
      let numExist = await User.findOne({ number: number });
  
      if (userExist) {
        return res.status(422).send({ message: "Email already exist!!" });
      } 
      if (numExist) {
        return res.status(422).send({ message: "Number already in use!" });
      }
      else {     
      const salt = await bcrypt.genSalt(Number(process.env.SALT));
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      
        const token = jwt.sign({ email: req.body.email }, SECRET_KEY);
        console.log(token);
        
      await new User({...req.body,password: hashPassword, token}).save();
        // const user = new User({guardName ,elderName ,address ,email ,number ,hashPassword});
        // await user.save();
        
        res.status(201).send({ message: "Registered Successfully!!" });
      }

    } catch (err) {
      console.log(err);
    }
});

// const validate = (data) => {
//     const schema = Joi.object({
//         guardName: Joi.string().required().label("Guardian Name"),
//         elderName: Joi.string().required().label("Elder Name"),
//         address: Joi.string().required().label("Address"),
//         email: Joi.string().email().required().label("Email"),
//         number: Joi.string().required().label("Phone Number"),
//         password: Joi.string().required().label("Password"),
//     });
//     return schema.validate(data);
// };
  




module.exports=router;
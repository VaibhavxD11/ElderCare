const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
// const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    guardName: {type: String, required: true},
    elderName: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: String, required: true},
    password: { type: String, required: true },
    uid: {type: Number, required:true},
    tokens: [{type:Object}]
});

// userSchema.methods.generateAuthToken = function(){
//     const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, { expireIn: "7d" })
//     console.log(token)
//     return token
// };

const User = mongoose.model("user", userSchema);

const validate = (data) => {
    const schema = Joi.object({
        guardName: Joi.string().required().label("Guardian Name"),
        elderName: Joi.string().required().label("Elder Name"),
        address: Joi.string().required().label("Address"),
        email: Joi.string().email().required().label("Email"),
        number: Joi.string().required().label("Phone Number"),
        password: Joi.string().required().label("Password"),
        uid: Joi.number().positive().required().label("uid")

    });
    console.log(schema.validate(data));
    return schema.validate(data);
};
module.exports = {User, validate};
const mongoose = require('mongoose');
const jwt = require('jsonwentoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    guardName: {type: String, required: true},
    elderName: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {expireIn: "7d"})
    return token
};

const User = mongoose.model("user", userSchema);

const validate = () => {
    const schema = Joi.object({
        guardName: Joi.string().required().label("Guardian Name"),
        elderName: Joi.string().required().label("Elder Name"),
        address: Joi.string().required().label("Address"),
        email: Joi.email().required().label("Email"),
        number: Joi.number().required().label("Phone Number"),
        password: Joi.passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
};
module.exports = {User, validate};
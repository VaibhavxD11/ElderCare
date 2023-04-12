const router = require("express").Router();
const { User } = require("../models/user");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

router.post("/Elogin", async (req, res) => {

    try {
        const { error } = validate(req.body);
        console.log(req.body.id);

        if (isNaN(req.body.id)) {
            return res.status(401).send({ message: "ID should be a number" });
        }
        if (req.body.id < 0) {
            return res.status(401).send({ message: "ID should be a positive number" });
        }
        if (error)
            return res.status(400).send({ message: "Please Enter the ID" });

        const user = await User.findOne({ uid: req.body.id });
        if (!user)
            return res.status(401).send({ message: "Invalid ID" });
        

        // const validPassword = await bcrypt.compare(
        //     req.body.password, user.password
        // );

        // if (!validPassword)
        //     return res.status(401).send({ message: "Invalid " });
        // console.log(validPassword);
        // console.log(Date.now());
        // const token = user.generateAuthToken();
        // console.log(token)
        const token = jwt.sign({ id: req.body.id }, SECRET_KEY, {
            expiresIn: '1d',
        });

        let oldtokens = user.tokens || []
        if (oldtokens.length) {
            oldtokens = oldtokens.filter(t => {
                const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000
                if (timeDiff < 86400) {
                    return t
                }
            })
        }
        await User.findByIdAndUpdate(user._id, { tokens: [...oldtokens, { token, signedAt: Date.now().toString() }] })

        res.status(200).send({ data: token, message: "Login Success" });


    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
})
const validate = (data) => {
    const schema = Joi.object({
        // email: Joi.string().label("Email"),
        // password: Joi.string().label("Password"),
        id: Joi.number().positive().required().label("uid")
    });
    console.log(schema.validate(data));
    return schema.validate(data);
}
module.exports = router;

require('dotenv').config();
const express = require("express");
const { User } = require("./models/user");
// const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const bcrypt = require("bcrypt");

app.use(express.json())
app.use(cors());
connection();

// app.use("/api/users", userRoutes);
app.use(require("./routes/users"));


// app.post("/login", async (req, res) => {
//     try {
//         const email = req.body.email;
//         const password = req.body.password;
//         // validate(email, password);
//         const user = await User.findOne({ email: email });
//         if (!user) {
//             return res.status(401).send({ message: "Invalid Email or Password" });
//         }
//         const validPassword = await bcrypt.compare(
//             password, user.password);

//         if (!validPassword)
//             return res.status(401).send({ message: "Invalid " });
//         // res.send(user);
//         // console.log(user);
//         res.status(201).send({ message: "Login Success" });

//         console.log(`${email} + ${password}`);
        
//     } catch (error) {
//         res.status(400).send({ message: "Invalid Email" })
//     }
// })

app.use(require("./routes/auth"));
app.use(require("./routes/authCtrl"));
app.use(require("./routes/yoga"));
app.use(require("./routes/userdetails"));

const { isAuth } = require('./middleware/auth');

app.get("/getuid", async (req, res) => {
    try {
        const user = await User.find({});
        console.log(user);
        res.send({status:"ok", data:user})
    } catch (error) {
        console.log(error);
    }
})

app.post("/homepage",isAuth,async (req, res) => {
    try {
        console.log("1");
        const user = await User.findOne({ _id: req.body.userId });
        if (!user) {
            return res.status(200).send({
                message: "user not found",
                success: false,
            });
        } else {
            res.status(200).send({
                success: true,
                data: {
                    name: user.name,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "auth error",
            success: false,
            error,
        });
    }
    // if (req.headers && req.headers.authorization) {
    //     const token = req.headers.authorization.split(' ')[1];
    //     if (!token) {
    //         return res
    //             .status(401)
    //             .json({ success: false, message: 'Authorization fail!' });
    //     }

    //     const tokens = req.user.tokens;

    //     const newTokens = tokens.filter(t => t.token !== token);

    //     await User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
    //     res.json({ success: true, message: 'Sign out successfully!' });
    // }
})

const port =  process.env.PORT||8080;
app.listen(port, () => console.log(`Listening on port ${port}.port...`));
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const SECRET_KEY = "NOTESAPI";

exports.isAuth = async (req, res, next) => {

    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, SECRET_KEY, (err, decode) => {
            if (err) {
                return res.status(200).send({
                    message: 'Auth  Failed',
                    success: false
                })
            }
            else {
                req.body.userId = decode.id
                next()
            }
        })

    } catch (error) {
        console.log(error)
        res.status(401).send({
            message: 'Authorization failed',
            success: false
        })
    }


    // if (req.headers && req.headers.authorization) {
    //     const token = req.headers.authorization.split(" ")[1];

    //     try {
    //         const decode = jwt.verify(token, process.env.JWT_SECRET);
    //         const user = await User.findById(decode.userId);
    //         if (!user) {
    //             return res.json({ success: false, message: 'unauthorized access!' });
    //         }

    //         req.user = user;
    //         next();
    //     } catch (error) {
    //         if (error.name === 'JsonWebTokenError') {
    //             return res.json({ success: false, message: 'unauthorized access!' });
    //         }
    //         if (error.name === 'TokenExpiredError') {
    //             return res.json({
    //                 success: false,
    //                 message: 'sesson expired try sign in!',
    //             });
    //         }

    //         res.res.json({ success: false, message: 'Internal server error!' });
    //     }
    // } else {
    //     res.json({ success: false, message: 'unauthorized access!' });
    // }
};
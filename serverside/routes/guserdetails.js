const { User } = require("../models/user");
const router = require("express").Router();

router.post("/gUserDetails", async (req, res) => {
    try {
        var user;
        if (req.body.email) {
            user = await User.findOne({ email: req.body.email });
        }
        else {
            user = await User.findOne({ uid: req.body.id });
        }
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


module.exports = router;
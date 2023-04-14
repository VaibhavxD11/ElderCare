const { User } = require("../models/user");
const router = require("express").Router();

router.post("/gUserDetails", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


module.exports = router;
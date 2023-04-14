const { number } = require("../models/number");
const router = require("express").Router();

router.post("/nform", async (req, res) => {
    try {
        const num = await number.find({ uid: req.body.id })
        console.log(num);
        if (!num) {
            return res.status(404).send({ message: "number not found" });
        }
        res.send(num);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


module.exports = router;
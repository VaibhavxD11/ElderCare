const { Checkup } = require("../models/checkup");
const router = require("express").Router();

router.post("/cform", async (req, res) => {
    try {
        const checkup = await Checkup.find({ uid: req.body.id })
        console.log(checkup);
        if (!checkup) {
            return res.status(404).send({ message: "checkup not found" });
        }
        res.send(checkup);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


module.exports = router;
const { Yoga } = require("../models/yoga");
const router = require("express").Router();

router.post("/yform", async (req, res) => {
    try {
        const yoga = await Yoga.find({ uid: req.body.id })
        console.log(yoga);
        if (!yoga) {
            return res.status(404).send({ message: "yoga not found" });
        }
        res.send(yoga);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


module.exports = router;
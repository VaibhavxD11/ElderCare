const { Med } = require("../models/med");
const router = require("express").Router();

router.post("/mform", async (req, res) => {
    try {
        const med = await Med.find({ uid: req.body.id })
        console.log(med);
        if (!med) {
            return res.status(404).send({ message: "meds not found" });
        }
        res.send(med);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


module.exports = router;
const { Checkup } = require("../models/checkup");

const router = require("express").Router();

router.post("/checkup", async (req, res) => {
    try {
        await new Checkup({ ...req.body }).save();
        res.status(201).send({ message: "Success" });

    } catch (error) {
        console.log(error);
    }
}
);

module.exports = router;
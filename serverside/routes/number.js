const { number } = require("../models/number");

const router = require("express").Router();

router.post("/number", async (req, res) => {
    try {
        await new number({ ...req.body }).save();
        res.status(201).send({ message: "Success" });

    } catch (error) {
        console.log(error);
    }
}
);

module.exports = router;
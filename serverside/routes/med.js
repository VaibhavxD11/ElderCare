const { Med } = require("../models/med");

const router = require("express").Router();

router.post("/med", async (req, res) => {
    try {
        await new Med({ ...req.body }).save();
        res.status(201).send({ message: "Success" });

    } catch (error) {
        console.log(error);
    }
}
);

module.exports = router;
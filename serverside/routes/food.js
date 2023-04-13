const { Food } = require("../models/food");

const router = require("express").Router();

router.post("/food", async (req, res) => {
    try {
        await new Food({ ...req.body }).save();
        res.status(201).send({ message: "Success" });

    } catch (error) {
        console.log(error);
    }
}
);

module.exports = router;
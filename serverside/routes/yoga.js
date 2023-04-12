const { yoga } = require("../models/yoga");

const router = require("express").Router();

router.post("/yoga", async (req, res) => {
    try {
        await new yoga({ ...req.body }).save();
        res.status(201).send({ message: "Success" });

    } catch (error) {
        console.log(error);
    }
}
);

module.exports = router;
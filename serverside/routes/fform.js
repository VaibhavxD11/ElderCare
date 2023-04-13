const { Food } = require("../models/food");
const router = require("express").Router();

router.post("/fform", async (req, res) => {
    try {
        const food = await Food.find({ uid: req.body.id })
        console.log(food);
        if (!food) {
            return res.status(404).send({ message: "food not found" });
        }
        res.send(food);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
});


module.exports = router;
const { point } = require("../models/point");

const router = require("express").Router();

router.get("/getpoints", async (req, res) => {
    try {
        const points = await point.find({});
        console.log(points);
        // if (!points) {
        //     res.status(401).send({ message: "No Points" });
        // }
        // else {
        //     res.send(points);
        // }
        res.status(200).send({ data: points, message: "Success" });

    } catch (error) {
        console.log(error);
    }
}
);

module.exports = router;
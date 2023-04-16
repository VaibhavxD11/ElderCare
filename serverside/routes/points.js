const { point } = require("../models/point");

const router = require("express").Router();

router.post("/points", async (req, res) => {
    try {
        var points = await point.findOne({ uid: req.body.uid }); 
        if (!points) {
            await new point({ ...req.body }).save();
        }
        else {
            // await point.findByIdAndUpdate(points._id,{ point: req.body.point })
            if (req.body.point != 0) {
                await point.findByIdAndUpdate(points._id, { point: req.body.point })
                points = await point.findOne({ uid: req.body.uid }); 
            }
        }
        console.log(points.point);
        // points.point = points.point + req.body.point;
        
        res.status(200).send({ data: points, message: "Success" });

    } catch (error) {
        console.log(error);
    }
}
);

module.exports = router;
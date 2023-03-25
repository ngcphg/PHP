var express = require("express");
var router = express.Router();
//DB connect
var Mon = require("../model/mon");

router.get("/list", async function (req, res) {
  await Mon.find().then((data) => {
    res.send(data);
  });
});

router.post("/add", function (req, res) {
  if (req.body) {
    let mon = new Mon();
    mon.name = req.body.name;
    mon.price = req.body.price;
    mon.desc = req.body.desc;
    mon.save();
    res.send({
      error: null,
      message: "Add product successfully.",
      resolved: true,
    });
  } else {
    res.send({
      error: 400,
      message: "Do not save record",
    });
  }
});

module.exports = router;
const Model = require("../models/mockupModel");
const { Router } = require("express");
const router = Router();

router.post("/add", (req, res) => {
  console.log(req.body);
  // res.send('response from user Router');

  new Model(req.body)
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;

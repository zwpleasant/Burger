var express = require("express");
var router = express.Router();
var taco = require("../models/taco.js");

router.get("/", function(req, res) {
  taco.selectAll(function(data) {
    var hbsObject = {
      tacos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/tacos", function(req, res) {
  taco.insertOne([
    "taco_name", "devoured"
  ], [
    req.body.taco_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/tacos/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  taco.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;

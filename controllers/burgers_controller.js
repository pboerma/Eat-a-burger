//requiring npm
const express = require("express");
const router = express.Router();
//models
const burger = require("../models/burger.js");

//setting / to display all data
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
//sending data to render in handlebars      
        res.render("index", hbsObject);
    });
});

//adding a burger based on form data
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
            req.body.name, req.body.devoured
        ], function (result) {
            res.json({ id: result.insertId });
        });
});

//updating a burger's status based on changes to devoured status
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//deleting burgers, because we can
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, function (result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });



module.exports = router;
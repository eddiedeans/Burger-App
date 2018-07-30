var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

//router
// router.get("/", function(req, res){
//     res.redirect("/burgers")
// });

router.get("/burgers", function(req, res){
    burger.all(function (data){
        res.render("index", {burgerName: data});
    });
});

router.post("/burgers/create", function(req, res){
    burger.create(req.body.burgerName, function(result){
        console.log(result);
        res.redirect("/")
    });
});

router.put("/burgers/:id", function(req, res){
    burger.update(req.params.id, function(result){
        console.log(result);
    });
});


module.exports = router;

var express = require("express");
var bodyParser = require("body-parser");
var orm = require("./config/orm");

orm.selectAll("burgers");

orm.insertOne("Hamburger" , false)

//Not working / Need to fix later
orm.updateOne("false", "cheeseburger")
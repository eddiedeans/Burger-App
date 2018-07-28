var burgerJS = require("../config/orm");

orm.selectAll("burgers");

orm.insertOne("Hamburger" , false)

//Not working / Need to fix later
orm.updateOne("false", "cheeseburger")

module.exports = burgerJS;
var connection = require("./connection.js");

var orm = {
    selectAll: function(allBurgers){
        var queryString = "SELECT * FROM ??"
        connection.query(queryString, [allBurgers], function(err, res){
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne: function(newBurgerName, newDevoured){
        var queryString = "INSERT INTO burgers (burgerName, devoured) VALUES ( ?, ? )"
        connection.query(queryString, [newBurgerName, newDevoured], function(err, res){
            if (err) throw err;
            console.log(res);
        });
    },
    updateOne: function(burgerName, booleanValue){
        var queryString = "UPDATE burgers SET devoured = ? WHERE burgerName = ? "
        connection.query(queryString, [booleanValue, burgerName], function(err, res){
            if (err) throw err;
            console.log(res);
        });
    },
}

module.exports = orm;
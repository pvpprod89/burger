var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    connection.query("select * from " + tableInput + ";", function(
      err,
      result
    ) {
      // if (err) throw err;
      console.log("[mysql error]", err);
      cb(result);
    });
  },

  updateOne: function(tableInput, condition, cb) {
    connection.query(
      "update " +
        tableInput +
        " " +
        "set devoured=true where id=" +
        condition +
        " ;",
      function(err, result) {
        // if (err) throw err;
        console.log("[mysql error]", err);
        cb(result);
      }
    );
  },

  insertOne: function(tableInput, val, cb) {
    connection.query(
      "insert " +
        "into " +
        tableInput +
        " " +
        "(burger_name, devoured, createdAt) values ('" +
        val +
        "',false);",
      function(err, result) {
        // if (err) throw err;
        console.log("[mysql error]", err);
        cb(result);
      }
    );
  }
};

module.exports = orm;

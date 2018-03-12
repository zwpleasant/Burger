var orm = require("../config/orm.js");

var taco = {
  selectAll: function(cb) {
    orm.selectAll("tacos", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("tacos", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("tacos", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = taco;
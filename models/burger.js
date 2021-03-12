//requiring orma
const orm = require("../config/orm.js");

var burger = {
    //integrating selectAll orm and passing in just a callback
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    //integrating insertOne orm and taking variables to specify data to be inserted
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    //integrating updateOne orm to update devoured status by taking data about the name of the burger and devoured status
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    //integrating delete orm based on id
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;
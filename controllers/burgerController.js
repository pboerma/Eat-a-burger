// Routes 

var router = express.Router();
// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", {burgers: data});
  });
});
router.get('/api/burgers/', function(req, res) {
	res.redirect('/');
});
router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var objColVals = {devoured : req.body.devoured};

  burger.update(objColVals, condition, function(){
    res.redirect('/');
  });
});
module.exports = router;
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ hello: "hello" });
});

module.exports = router;

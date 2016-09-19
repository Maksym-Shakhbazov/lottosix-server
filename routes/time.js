let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/time', function(req, res, next) {
  let date = new Date().getTime();
  res.json({ date: date });
});

module.exports = router;

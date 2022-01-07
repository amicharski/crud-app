var express = require('express');
const users = require("../controller/users.controller");
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next) {
  //res.sendFile('index.html');
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

module.exports = router;

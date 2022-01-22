const sessions = require("../controller/sessions.controller.js");
var express = require('express');
var router = express.Router();

// Start session
router.post("/session", sessions.new);

// End session
router.delete("/session/:token", sessions.delete);

// Verify session
router.get("/verifysession/:id", sessions.verify);

module.exports = router;
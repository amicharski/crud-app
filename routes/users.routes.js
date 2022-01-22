const users = require("../controller/users.controller.js");
var express = require('express');
var router = express.Router();
const pathStart = "/api";

// Create a new User
router.post("/users", users.create);

// Authenticates login credentials
router.post("/login", users.login);

// Authenticate with jwt
router.get(pathStart + "/jwtauth", users.verifyToken, users.authenticate);

// Retrieve all Users
router.get("/getusers", users.findAll);

// Retrieve a single User with id
router.get("/:id", users.findOne);

// Update a User with id
router.put("/users/:id", users.update);

// Delete a User with id
router.delete("/:id", users.delete);

module.exports = router;
const users = require("../controller/users.controller.js");
var express = require('express');
var router = express.Router();
const pathStart = "/api";

// Create a new User
router.post(pathStart + "/users", users.create);

// Authenticates login credentials
router.post(pathStart + "/login", users.login);

// Authenticate with jwt
router.get(pathStart + "/jwtauth", verifyToken, users.authenticate);

// Retrieve all Users
router.get("/", users.findAll);

// Retrieve all Users
router.get("/getUser", users.findAllUsers);

// Retrieve a single User with id
router.get("/:id", users.findOne);

// Update a User with id
router.put("/:id", users.update);

// Delete a User with id
router.delete("/:id", users.delete);

function verifyToken(req, res, next){
    console.log("token being verified");
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = router;
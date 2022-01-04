const users = require("../controller/users.controller");

module.exports = app => {
    const users = require("../controller/users.controller.js");

    var router = require("express").Router();

    // Create a new User
    router.post("/", users.create);

    // Retrieve all Users
    router.get("/", users.findAll);

    // Retrieve all Users
    router.get("/users", users.findAllUsers);

    // Retrieve a single User with id
    router.get("/:id", users.findOne);

    // Update a User with id
    router.put("/:id", users.update);

    // Delete a User with id
    router.delete("/:id", users.delete);

    // Authenticates login credentials
    router.get("/login", users.login);

    app.use('/api/users', router);
};
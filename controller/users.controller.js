require("dotenv").config();

const db = require("../models");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const Users = db.users;
const Op = db.Sequelize.Op;
const jose = require("jose");

exports.authenticate = (req, res) => {
    console.log("Authenticating");
    res.json();
};

/**
 * User Login
 * @param req: body{
 *     username: String,
 *     password: String
 * }
 * @param res
 * @returns {Promise<void>}: returns{
 *     successful: bool,
 *     message: String,
 *     accountType: int
 * }
 */
exports.login = async (req, res) => {
    console.log("User being logged in");
    const loginCredentials = {
        "username": req.body.username,
        "password": crypto.createHash("md5").update(req.body.password).digest("hex")
    };
    let returns = {
        successful: null,
        message: null,
        accountType: null
    };

    let user = await Users.findOne({where: {username: loginCredentials.username}});
    if(!user){
        returns.successful = false;
        returns.message = "Invalid username";
    } else if(user.password === loginCredentials.password) {
        if(user.account_type !== 0){ // checking for suspension
            returns.successful = true;
            returns.message = "Login successful";
            returns.accountType = user.account_type;
            // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            // res.json({ accessToken: accessToken });
        } else {
            returns.successful = false;
            returns.message = "User account is suspended. Please contact a system administrator.";
            returns.accountType = user.account_type;
        }
    } else {
        returns.successful = false;
        returns.message = "Username and password do not match";
    }
    res.send(returns);
};

// Create and Save a new user
exports.create = (req, res) => {
    console.log("User being created");
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: crypto.createHash("md5").update(req.body.password).digest("hex")
    };
    Users.create(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred when creating a user"
            })
        });
};

// Retrieve all users from the database.
exports.findAll = (req, res) => {
    const user = req.query.user;
    var condition = user ? { user: { [Op.like]: `%${user}%` } } : null;

    Users.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occurred when retrieving users"
            })
        });
};

// Find a single user with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Users.findByPk(id)
        .then(data => {
            if(data){
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Cannot find user with id=${id}"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving Tutorial with id=" + id
            });
        });
};

// Update a user by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Users.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "User was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete User with id=" + id
            });
        });
};

// Find all users
exports.findAllUsers = (req, res) => {
    Users.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving users."
            });
        });
};

/***
 * Utility Functions
 */

exports.verifyToken = (req, res, next) => {
    console.log("token being verified");
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if(token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.sendStatus(403);
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
const db = require("../models");
const crypto = require("crypto");
const Users = db.users;
const Op = db.Sequelize.Op;

// User Login
exports.login = (req, res) => {
    const loginCredentials = {
        username: req.body.username,
        password: crypto.createHash("md5").update(req.body.password).digest("hex")
    };
    const user = Users.findOne({ where: { username: user.username } });
    if(user.password === loginCredentials.password){
        return true;
    } else {
        return false;
    }
}

// Create and Save a new user
exports.create = (req, res) => {
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

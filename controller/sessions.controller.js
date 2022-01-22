require("dotenv").config();

const db = require("../models");
const Sessions = db.sessions;
const jose = require("jose");
const {Sequelize} = require("sequelize");

exports.new = async (req, res) => {
    console.log("Starting new session");
    let expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);
    console.log(typeof await jose.generateSecret("SHA256"));
    const session = {
        token: null,
        token_expiration: Sequelize.DATE(expiration),
        user_id: req.body.userID
    };
    Sessions.create(session)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err.message);
        });
}

// Find a single user with an id
exports.verify = (req, res) => {
    const id = req.params.id;

    Sessions.findByPk(id)
        .then(data => {
            if(data){
                res.send(data);
            } else {
                res.status(404).send({
                    message: "Cannot find session with id=${id}"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving session with id=" + id
            });
        });
};

// Delete a user with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Sessions.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Session was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Session with id=${id}. Maybe Session was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Could not delete Session with id=" + id
            });
        });
};
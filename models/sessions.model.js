module.exports = (connection, Sequelize) => {
    return connection.define("Session", {
        token: {
            type: Sequelize.STRING(128),
            primaryKey: true
        },
        token_expiration: {
            type: Sequelize.DATE
        },
        user_id: {
            type: Sequelize.INTEGER
        }
    }, {
        timestamps: false
    });
};
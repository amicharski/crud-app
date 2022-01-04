module.exports = (connection, Sequelize) => {
    return connection.define("Login", {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING(20)
        },
        email: {
            type: Sequelize.STRING(254)
        },
        password: {
            type: Sequelize.STRING(64)
        },
        account_type: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        timestamps: false
    });
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        isActive:{
            type: DataTypes.BOOLEAN
        }
    });
    return Users;
};
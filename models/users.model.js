const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypesSequelize) => {
    const Users = sequelize.define("users", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        phone: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        is_active:{
            type: DataTypes.BOOLEAN,
            default: 1
        }
    });
    return Users;
};
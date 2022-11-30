const { Op } = require("sequelize");
const db = require("../models");

exports.getAllUsers = async () => {
  return await db.users.findAll();
}

exports.createUser = async (p) => {
  return await db.users.create(p);
};

exports.getUserByUsername = async (params) => {
  return await db.users.findAll({
    where: { name: { [Op.like]: `%${params}%` } }
  });
};

exports.updateUser = async (id, p) => {
  return await db.users.findByIdAndUpdate(id, p);
};

exports.deleteUser = async (id) => {
  return await db.users.findByIdAndDelete(id);
};
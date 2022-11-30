const userService = require("../services/UserService");

exports.getAllUsers = async (req, res) => {
  try {
    const types = await userService.getAllUsers();
    res.json({ data: types, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const type = await userService.createUser(req.body);
    res.json({ data: type, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserByUsername = async (req, res) => {
  try {
    const type = await userService.getUserByUsername(req.body.name);
    res.json({ data: type, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.updateUser = async (req, res) => {
  try {
    const type = await userService.updateUser(req.params.id, req.body);
    res.json({status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 
exports.deleteUser = async (req, res) => {
  try {
    const type = await userService.deleteUser(req.params.id);
    res.json({status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
const express = require("express");
const { getAllUsers, getUserByUsername, updateUser, deleteUser, createUser} = require("../controllers/UserController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/login").post(getUserByUsername);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
const express = require("express");
const { getAllUsers, getUserByName, updateUser, deleteUser, createUser} = require("../controllers/UserController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:name").post(getUserByName);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/user", usersController.getAllUsers);
router.post("/user", usersController.addUser);
router.get("/user/:id", usersController.getUserById);
router.put("/user/:id", usersController.updateUser);
router.delete("/user/:id", usersController.deleteUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/user", usersController.getAllUsers);
router.get("/user/:id", usersController.getUserById);
router.post("/user", usersController.createUser);
router.put("/user/:id", usersController.updateUser);
router.delete("/user/:id", usersController.deleteUser);

module.exports = router;

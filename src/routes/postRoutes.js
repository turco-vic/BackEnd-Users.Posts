const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getAllPosts);
router.post("/", postController.addPost);
router.get("/:id", postController.getPostById);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);

module.exports = router;

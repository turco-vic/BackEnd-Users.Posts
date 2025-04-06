const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/post", postController.getAllPosts);
router.get("/post/:id", postController.getPostById);
router.post("/post", postController.createPost);
router.put("/post/:id", postController.updatePost);
router.delete("/post/:id", postController.deletePost);

module.exports = router;

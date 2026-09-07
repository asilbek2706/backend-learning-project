const express = require("express");
const postModel = require("../models/post.model");
const postController = require("../controllers/post.controller");

const router = express.Router();

router.get("/", postController.getAll);
router.post("/create", postController.createPost);

module.exports = router;

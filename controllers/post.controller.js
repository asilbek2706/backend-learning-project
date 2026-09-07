const postModel = require("../models/post.model");

class PostController {
  async getAll(req, res) {
    try {
      const allPosts = await postModel.find();
      res.status(200).json(allPosts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts", error });
    }
  }

  async createPost(req, res) {
    try {
      const { title, body } = req.body;
      const newPost = await postModel.create({ title, body });
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ message: "Error creating post", error });
    }
  }
}

module.exports = new PostController();

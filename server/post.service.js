class PostService {
  async create() {
    const newPost = await postModel.create({ title, body });
  }
}

const PostModel = require('../models/PostModel');

const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.getPosts();
    res.json(posts)
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    res.status(500).json({ error: 'Erro ao buscar posts.' });
  }
}

const getPostById = async (req, res) => {
  try {
    const post = await PostModel.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar post.' });
  }
}

const createPost = async (req, res) => {
  try {
    const { title, content, user_id } = req.body;
    const newPost = await PostModel.createPost(title, content, user_id);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar post.' });
  }
}

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await PostModel.editPost(req.params.id, title, content);
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrado.' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar post.' });
  }
}

const deletePost = async (req, res) => {
  try {
    const result = await PostModel.deletePost(req.params.id);
    if (result.error) {
      return res.status(404).json(result);
    }
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar post.' });
  }
}

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
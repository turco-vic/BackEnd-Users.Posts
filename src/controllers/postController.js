const Post = require("../models/Post");
const PostList = require("../models/PostList");
const lista = new PostList();

lista.addPost(new Post("João Silva", "joao@example.com", 30));
lista.addPost(new Post("Maria Souza", "maria@example.com", 25));

const router = {
  getAllPosts: (req, res) => {
    res.json(lista.getAllPosts());
  },

  getPostById: (req, res) => {
    try {
      res.json(lista.getPostById(req.params.id));
    } catch (error) {
      res.status(404).json({ message: "Publicação não encontrada", error });
    }
  },

  addPost: (req, res) => {
    try {
      const { idUser, like, comment, description, image } = req.body;
      if (!idUser || like === undefined || comment === undefined) {
        throw new Error("Preencha os campos necessários");
      }
      const newPost = new Post(idUser, like, comment, description, image);
      lista.addPost(newPost);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: error.message, error });
    }
  },

  updatePost: (req, res) => {
    try {
      res.json(lista.updatePost(req.params.id, req.body));
    } catch (error) {
      res.status(404).json({ message: "Erro ao atualizar a publicação", error });
    }
  },

  deletePost: (req, res) => {
    lista.deletePost(req.params.id);
    res.status(200).json({ message: "Publicação deletada com sucesso", IdDeletado: req.params.id });
  }
};

module.exports = router;

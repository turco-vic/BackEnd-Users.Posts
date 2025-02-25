const Post = require("../models/Post");
const PostList = require("../models/PostList");
const lista = new PostList();

lista.addPost(new Post("João Silva", "joao@example.com", 30));
lista.addPost(new Post("Maria Souza", "maria@example.com", 25));

const router = {
  getAllUsers: (req, res) => {
    res.json(lista.getAllUsers());
  },

  getUserById: (req, res) => {
    try {
      res.json(lista.getUserById(req.params.id));
    } catch (error) {
      res.status(404).json({ message: "Usuário não encontrado", error });
    }
  },

  addUser: (req, res) => {
    try {
      const { name, email, age } = req.body;
      if (!name || !email || age === undefined) {
        throw new Error("Todos os campos são obrigatórios");
      }
      const newUser = new User(name, email, age);
      lista.addUser(newUser);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message, error });
    }
  },

  updateUser: (req, res) => {
    try {
      res.json(lista.updateUser(req.params.id, req.body));
    } catch (error) {
      res.status(404).json({ message: "Erro ao atualizar o usuário", error });
    }
  },

  deleteUser: (req, res) => {
    lista.deleteUser(req.params.id);
    res.status(200).json({ message: "Usuário deletado com sucesso", IdDeletado: req.params.id });
  }
};

module.exports = router;

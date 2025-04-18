const UserModel = require('../models/UserModel');

const getAllUsers = async (req, res) => {
  try {
      const { name } = req.query;
      const users = await UserModel.getAllUsers(name);
      res.json(users);
  } catch (error) { 
      res.status(500).json({ message: "Erro ao buscar usúarios!" });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.getUsersById(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado!' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário!' });
  }
}

/*const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.createUsers(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar o usuário!" });
  }
}*/

const createUser = async (req, res) => {
  try {
      const { name, email } = req.body;
      const photo = req.file ? req.file.filename : null;
      const newuser = await UserModel.createUser(name, email, photo);
      res.status(201).json(newuser);
  } catch (error) {
      res.status(500).json({ message: "Erro ao criar usúario." });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await UserModel.updateUsers(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ message: "usuário não encontrado!" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar o usuário!" });
  }
}

const deleteUser = async (req, res) => {
  try {
    const result = await UserModel.deleteUsers(req.params.id);
    if (result.error) {
      return res.status(404).json(result);
    }
    res.json(result);

  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao deletar usuário!' });
  }
}

module.exports = { getAllUsers, getUserById, deleteUser, updateUser, createUser };
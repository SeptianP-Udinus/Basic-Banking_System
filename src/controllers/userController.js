const userModel = require('../models/userModel');

const createUser = async (req, res) => {
  const { email, name, bio } = req.body;
  try {
    const user = await userModel.createUser({ email, name, bio });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userModel.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserById = async (req, res) => {
  const { userId } = req.params;
  const { email, name, bio } = req.body;
  try {
    const user = await userModel.updateUserById(userId, {email, name, bio});
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    await userModel.deleteUserById(userId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById
};

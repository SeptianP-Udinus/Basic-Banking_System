const accountModel = require('../models/accountModel');

const createAccount = async (req, res) => {
  const { userId, balance } = req.body;
  try {
    const account = await accountModel.createAccount({ userId, balance });
    res.status(201).json(account);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAccounts = async (req, res) => {
  try {
    const accounts = await accountModel.getAccounts();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteAccountById = async (req, res) => {
  const { userId } = req.params;
  try {
    await accountModel.deleteAccountById(userId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAccount,
  getAccounts,
  deleteAccountById
};

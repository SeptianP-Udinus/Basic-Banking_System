const transactionModel = require('../models/transactionsModel');

const createTransaction = async (req, res) => {
  const { fromAccountId, toAccountId, amount } = req.body;
  try {
    const transaction = await transactionModel.createTransaction({ fromAccountId, toAccountId, amount });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await transactionModel.getTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getTransactionById = async (req, res) => {
  const { transactionId } = req.params;
  try {
    const transaction = await transactionModel.getTransactionById(transactionId);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createTransaction,
  getTransactions,
  getTransactionById
};

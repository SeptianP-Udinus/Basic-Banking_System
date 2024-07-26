const express = require('express');
const { createAccount, getAccounts, deleteAccountById } = require('../controllers/accountController');
const router = express.Router();

router.post('/', createAccount);
router.get('/', getAccounts);
router.delete('/:userId', deleteAccountById);

module.exports = router;

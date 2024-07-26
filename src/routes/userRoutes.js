const express = require('express');
const { createUser, getUsers, getUserById, updateUserById, deleteUserById } = require('../controllers/userController');
const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:userId', getUserById);
router.put('/:userId', updateUserById);
router.delete('/:userId', deleteUserById)

module.exports = router;

import express from 'express';
import {
  deleteUser,
  fetchAllUsers,
  fetchSingleUser,
  updateUser,
} from '../controllers/userController.js';
import { verifyAccessToken } from '../middlewares/verifyAccessToken.js';

const router = express.Router();

// Get all users
router.get('/', fetchAllUsers);

// Get single user
router.get('/:id', fetchSingleUser);

// Update single user (token)
router.patch('/:id', verifyAccessToken, updateUser);

// Delete user (token)
router.delete('/:id', verifyAccessToken, deleteUser);

export default router;

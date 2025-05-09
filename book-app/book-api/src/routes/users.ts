import express from 'express';
import {
  deleteUser,
  fetchAllUsers,
  fetchSingleUser,
  updateUser,
} from '../controllers/userController.js';

const router = express.Router();

// Routes in index.ts: app.use('/users', userRouter);

// Get all users
router.get('/', fetchAllUsers);

// Get single user
router.get('/:id', fetchSingleUser);

// Update single user (token)
router.patch('/:id', updateUser);

// Delete user (token)
router.delete('/:id', deleteUser);

export default router;

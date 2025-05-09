import express from 'express';
import { registerUser } from '../controllers/authController.js';

const router = express.Router();

// Register new user
router.post('/register', registerUser);

// To-do
// Log in user
// router.post('/login', logIn);
// Log out user
// router.post('/logout', logOut);

export default router;

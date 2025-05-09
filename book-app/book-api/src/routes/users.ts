import express from 'express';

const router = express.Router();

// Routes in index.ts: app.use('/users', userRouter);

// Get all users
router.get('/');

// Get single user
router.get('/:id');

// Update single user (token)
router.patch('/:id');

// Delete user (token)
router.delete('/:id');

export default router;

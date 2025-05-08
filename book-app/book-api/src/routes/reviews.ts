import express from 'express';
import { Request, Response } from 'express';
import Review from '../models/Review.js';

const router = express.Router();

// GET: Get all reviews
router.get('/', async (_req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// GET: Get a review by ID
router.get('/:id', async (req: any, res: any) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });
    res.json(review);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// POST: Create a new review
router.post('/', async (req, res) => {
  const { name, content, rating } = req.body;
  const review = new Review({ name, content, rating });

  try {
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// PATCH: Update an existing review (Requires token)
router.patch('/:id', (req, res, next) => {
  // Middleware to check the token
  // If the token is valid, call next() to continue processing
  // If the token is invalid, return an error (e.g., 401 Unauthorized)
  next(); 
}, async (req: any, res: any) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    // Update only the fields that were provided in the request 
    if (req.body.name) review.name = req.body.name;
    if (req.body.content) review.content = req.body.content;
    if (req.body.rating) review.rating = req.body.rating;

    const updatedReview = await review.save();
    res.json(updatedReview);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// DELETE: Delete an existing review (Requires token)
router.delete('/:id', (req, res, next) => {
 // Place for middleware that will check the token
  // If the token is valid, call next() to continue the execution
  // If the token is invalid, return an error (e.g., 401 Unauthorized)
  next(); // Leave for token validation middleware
}, async (req: any, res: any) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    await review.deleteOne();
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

export default router;
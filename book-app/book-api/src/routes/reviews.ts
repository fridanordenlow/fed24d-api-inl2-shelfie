import express from 'express';
import { Request, Response } from 'express';
import Review from '../models/Review.js';
import { authenticateToken } from '../middlewares/authMiddleware.js';

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

// GET: Get all reviews for a specific book
router.get('/books/:bookId', async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ bookId: req.params.bookId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// POST: Create a new review
router.post('/', async (req, res) => {
  const { name, content, rating, bookId } = req.body;
  const review = new Review({ name, content, rating, bookId});

  try {
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// PATCH update review — with token
router.patch('/:id', authenticateToken, async (req: any, res: any) => {  // Middleware added to verify the token
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      console.log('Review not found!');
      return res.status(404).json({ message: 'Review not found' });
    }

    console.log('Review before update:', review);

    //Update only the fields that were provided in the request 
    if (req.body.name) review.name = req.body.name;
    if (req.body.content) review.content = req.body.content;
    if (req.body.rating) review.rating = req.body.rating;

    console.log('Review after update:', review);

    const updatedReview = await review.save();
    res.json(updatedReview);  // Response with the updated review
  } catch (err) {
    console.log('Error:', err);
    res.status(400).json({ message: (err as Error).message });
  }
});

// DELETE review — with token
router.delete('/:id', authenticateToken, async (req: any, res: any) => {
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
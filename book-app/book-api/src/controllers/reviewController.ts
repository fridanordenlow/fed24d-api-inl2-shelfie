import { Request, Response } from 'express';
import mongoose from 'mongoose';
import Review from '../models/Review.js';

/**
 * GET /reviews
 * Retrieves all reviews from the database.
 */
export const getAllReviews = async (_req: Request, res: Response) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

/**
 * GET /reviews/books/:bookId
 * Retrieves all reviews for a specific book based on bookId.
 */
export const getReviewsByBookId = async (req: Request, res: Response) => {
  try {
    const reviews = await Review.find({ bookId: req.params.bookId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
/**
 * POST /reviews
 * Creates and saves a new review to the database.
 */
export const createReview = async (req: Request, res: Response) => {
  const { name, content, rating, bookId } = req.body;
  const review = new Review({ name, content, rating, bookId });

  try {
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
/**
 * GET /reviews/:id
 * Retrieves a single review by its ID.
 */
export const getReviewById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid review ID' });
  }

  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

  //Updates fields of an existing review based on its ID.

export const updateReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (req.body.name) review.name = req.body.name;
    if (req.body.content) review.content = req.body.content;
    if (req.body.rating) review.rating = req.body.rating;

    const updatedReview = await review.save();
    res.json(updatedReview);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};


 // Deletes a review from the database by its ID.
export const deleteReview = async (req: Request, res: Response) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    await review.deleteOne();
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
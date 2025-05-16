import { Router, Request, Response } from 'express';
import { authenticateToken } from '../middlewares/authMiddleware.js';
import {
  getAllReviews,
  getReviewsByBookId,
  createReview,
  getReviewById,
  updateReview,
  deleteReview
} from '../controllers/reviewController.js';

const router = Router();

router.get('/', getAllReviews);
router.get('/books/:bookId', getReviewsByBookId);
router.post('/', createReview);
router.get('/:id', (req, res, next) => {
  Promise.resolve(getReviewById(req, res)).catch(next);
});
router.patch('/:id', authenticateToken, (req, res, next) => {
  Promise.resolve(updateReview(req, res)).catch(next);
});//Token
router.delete('/:id', authenticateToken, (req, res, next) => {
  Promise.resolve(deleteReview(req, res)).catch(next);
});//Token

export default router;
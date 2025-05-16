import express from 'express';
import { verifyAccessToken } from '../middlewares/verifyAccessToken.js';
import {
  createBook,
  deleteBook,
  fetchAllBooks,
  fetchBook,
  updateBook,
} from '../controllers/booksController.js';

const router = express.Router();

router.get('/', fetchAllBooks);
router.get('/:id', fetchBook);

router.post('/', verifyAccessToken, createBook);
router.patch('/:id', verifyAccessToken, updateBook);
router.delete('/:id', verifyAccessToken, deleteBook);

export default router;

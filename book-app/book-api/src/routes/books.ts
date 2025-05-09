import express from 'express';
import { 
  createBook, 
  deleteBook, 
  fetchAllBooks, 
  fetchBook, 
  updateBook } from '../controllers/booksController.js';
// import { verifyAccessToken } from '../middleware/verifyToken';
const router = express.Router()

router.get('/', fetchAllBooks)
router.get('/:id', fetchBook)

router.post('/', /*verifyAccessToken,*/ createBook)
router.patch('/:id',/*verifyAccessToken,*/ updateBook)
router.delete('/:id',/*verifyAccessToken,*/ deleteBook)

export default router;
import mongoose from 'mongoose';
import { IBook } from '../types/IBook.js';
const Schema = mongoose.Schema;

const BookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  published_year: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});

export default mongoose.model<IBook>('Books', BookSchema);

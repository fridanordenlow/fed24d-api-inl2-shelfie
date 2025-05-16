import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IReview extends Document {
  bookId: Types.ObjectId;
  name: string;
  content: string;
  rating: number;
  created_at: Date;
}

const reviewSchema = new Schema<IReview>({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true }, // ref: 'Books'? From Marias Book.ts
  name: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  created_at: { type: Date, default: Date.now },
});

const Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review;

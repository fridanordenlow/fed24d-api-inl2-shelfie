import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'; // A more concise way to import dotenv
import authRouter from './routes/auth.js';
import userRouter from './routes/users.js';
import booksRouter from './routes/books.js'

import reviewRouter from './routes/reviews.js';

const app = express();

// Middlewares
app.use(express.json()); // Parse JSON request
app.use(cookieParser()); // Parse Cookies
app.use(
  cors({
    origin: '*', // This makes the Express server accept requests from all other domains
    credentials: true, // Allows cookies sent to this API
  })
);

// Routes
app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/books', booksRouter);
app.use('/api/reviews', reviewRouter); // Varför är api med här? Tror att det bara ska vara /reviews

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

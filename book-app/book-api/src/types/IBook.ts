import { IReview } from "../models/Review.js";

export interface ITodo {
  title: string;
  description: string;
  author: string;
  genres: string[];
  image: string;
  published_year: number;
  reviews: IReview[],
}
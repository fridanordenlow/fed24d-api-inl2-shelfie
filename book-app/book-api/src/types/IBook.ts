import { IReview } from "../models/Review.js";

export interface IBook {
  title: string;
  description: string;
  author: string;
  genres: string[];
  image: string;
  published_year: number;
  reviews: IReview[],
}
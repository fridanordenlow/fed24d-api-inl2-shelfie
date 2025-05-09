import { Request, Response } from 'express';
import User from '../models/User.js';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const newUser = new User({
      username,
      password,
    });

    await newUser.save();
    res.status(201).json({ message: 'New user added', user: newUser });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

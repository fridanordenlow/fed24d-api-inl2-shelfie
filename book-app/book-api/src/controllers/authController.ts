import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
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

// To do:
// Add bcrypt for password
export const logIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(401).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    const accessToken = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET || '',
      { expiresIn: '24h' }
    );

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.json({ message: 'You are logged in' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logOut = (_: Request, res: Response) => {
  res.clearCookie('accessToken');
  res.json({ message: 'You are logged out' });
};

import { Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User.js';
import { IUser } from '../types/IUser.js';

export const fetchAllUsers = async (req: Request, res: Response) => {
  try {
    res.json(await User.find());
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

export const fetchSingleUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid user ID.' });
      return;
    }

    const user = await User.findById(id);

    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    res.json(user);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  const updates: Partial<IUser> = req.body;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Invalid User ID.' });
    return;
  }

  if (!updates || Object.keys(updates).length === 0) {
    res
      .status(400)
      .json({ error: 'At least one field must be provided to update' });
    return;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json({ message: 'User updated', user: updatedUser });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Invalid post ID.' });
      return;
    }

    const result = await User.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json({ message: 'User deleted' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

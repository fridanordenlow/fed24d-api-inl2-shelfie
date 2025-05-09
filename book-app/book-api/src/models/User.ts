import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/IUser.js';

const UserSchema: Schema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IUser>('User', UserSchema);

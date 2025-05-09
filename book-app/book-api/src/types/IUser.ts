export interface IUser {
  _id: string; // Eller mongoose.Schema.Types.ObjectId om du använder ObjectId direkt
  username: string;
  password: string;
  is_admin: boolean;
  created_at: Date;
}

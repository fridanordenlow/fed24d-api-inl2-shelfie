export interface IUser {
  _id: number;
  username: string;
  password: string;
  is_admin: boolean;
  created_at: Date;
}

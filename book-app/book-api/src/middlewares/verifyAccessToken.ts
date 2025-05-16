import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const verifyAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('Accesstoken:', req.cookies.accessToken);

  if (req.cookies.accessToken === undefined) {
    res.sendStatus(401).json({ message: 'Access token is missing' });
    return;
  }
  jwt.verify(
    req.cookies.accessToken,
    process.env.JWT_SECRET || '',
    function (err: jwt.VerifyErrors | null) {
      if (err) {
        res.sendStatus(403);
        return;
      }

      next();
    }
  );
};

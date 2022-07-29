import { NextFunction, Request, Response } from "express";
import ApiError from "../exeptions/api.error";
import User from "../models/user.model";

export default function (isNew: boolean) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email;
      const user = await User.findOne({ email });
      if (isNew && user) throw new ApiError(400, `user with email ${email} alreay exist`);
      if (!isNew && !user) throw new ApiError(400, `user with email ${email} does not exist`);
      next();
    } catch (err) {
      next(new ApiError(err.status, err.message));
    }
  };
}

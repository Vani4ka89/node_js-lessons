import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors";
import { UserValidator } from "../validators";

class UserMiddleware {
  public isCreateVadid(req: Request, res: Response, next: NextFunction) {
    try {
      const { error, value } = UserValidator.create.validate(req.body);
      if (error) {
        throw new ApiError(error.message, 400);
      }
      res.locals = value;
      next();
    } catch (e) {
      next(e);
    }
  }

  public isUpdateValid(req: Request, res: Response, next: NextFunction) {
    try {
      const { error, value } = UserValidator.update.validate(req.body);
      if (error) {
        throw new ApiError(error.message, 400);
      }
      res.locals = value;
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const userMiddleware = new UserMiddleware();

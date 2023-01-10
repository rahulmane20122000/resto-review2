import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { loginDetails } from "../database/usersData";
import { ResponseHandler } from "./response-handler";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userName, password } = req.body;
  if (req.headers.authorization) return next();

  const userIndex = loginDetails.findIndex(
    (data) => data.userName === userName && data.password === password
  );

  if (userIndex !== -1) {
    const token = jwt.sign(
      loginDetails[userIndex],
      process.env.JWT_KEY as string
    );
    return next(new ResponseHandler({token:token,role:loginDetails[userIndex].role}, 200));
  }
  next(new ResponseHandler(null, 401, "UNAUTHORISED!!!"));
};

export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeaders = req.headers.token;

  const verified = jwt.verify(
    authHeaders as string,
    process.env.JWT_KEY as string
  );
  res.locals = verified as any;
  console.log(verified);
  if (verified) {
    return next();
  }
  return next(new ResponseHandler(null, 404, "Token Not Found"));
};

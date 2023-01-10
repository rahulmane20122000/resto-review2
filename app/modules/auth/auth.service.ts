import { NextFunction,Request,Response } from "express";
import { loginDetails } from "../../database/usersData";
import { ResponseHandler } from "../../utilities/response-handler";
import jwt from 'jsonwebtoken';

export const createToken = (req: Request,
    res: Response,
    next: NextFunction)=>{
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
}
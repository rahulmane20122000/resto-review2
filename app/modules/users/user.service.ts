import { NextFunction } from "express";
import { userSchema } from "./user.schema";


const postReview = (reviewDetails:any,next:NextFunction)=>{
      const response  = userSchema.postReview(reviewDetails,next);
      return response;
}

export default{postReview};
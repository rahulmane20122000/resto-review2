import { Router } from "express";
import userServices from "./user.service";

const router = Router();
const {postReview} = userServices;

router.post("/",(req,res,next)=>{
  postReview(req.body,next);
});

export default router;
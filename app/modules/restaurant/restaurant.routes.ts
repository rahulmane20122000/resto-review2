import { Router } from "express";
import { authorization } from "../../utilities/authentication-authorisation";

import managerService from "./restaurant.service";
const router = Router();

const { getAllReview, getAllReviewAdmin,getAllRestaurant } = managerService;

router.get("/",(req,res,next)=>{
  getAllRestaurant(next);
});

router.get("/getMyReviews", authorization, (req, res, next) => {
  const id = res.locals.id;
  getAllReview(id, next);
});

router.get("/:restoName/:id", authorization, (req, res, next) => {
  const role = res.locals.role;
  const {id,restoName} = req.params;
  getAllReviewAdmin(role,id,restoName,next);
});

export default router;

import { NextFunction } from "express";
import { ResponseHandler } from "../../utilities/response-handler";
import { restaurantService } from "./restaurant.schema";

const getAllReview = (id: string, next: NextFunction) => {
  const reviews: any = restaurantService.getAllReviews(id, next);
  return reviews.length !== 0
    ? next(new ResponseHandler(reviews, 200))
    : next(new ResponseHandler(null, 404, "No Reviews"));
};

const getAllReviewAdmin = (
  role: string,
  id: string,
  restoName: string,
  next: NextFunction
) => {
  const reviews: any = restaurantService.getAllReviewsAdmin(
    role,
    id,
    restoName,
    next
  );

  let sum = 0;
  for (let index of reviews.review) {
    sum += index.average;
  }

  let average: number = sum / reviews.review.length;
  average = average.toFixed(1) as any;

  return next(
    new ResponseHandler({ ...reviews, lifeTimeRating: Number(average) }, 200)
  );
};

const getAllRestaurant = (next: NextFunction) => {
  const response = restaurantService.getAllRestaurant(next);
  return response;
};
export default { getAllReview, getAllReviewAdmin, getAllRestaurant };

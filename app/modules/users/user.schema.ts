import { NextFunction } from "express";
import { restaurantsData } from "../../database/usersData";
import { ResponseHandler } from "../../utilities/response-handler";

class UserSchema {
  postReview(reviewDetails: any, next: NextFunction) {
    const { restaurantName, userName, ...rating } = reviewDetails;

    if (!restaurantName || !userName) {
      return next(
        new ResponseHandler(null, 404, "restaurant Name or userName missing!!!")
      );
    }
    if (
      !rating.food ||
      !rating.ambiance ||
      !rating.service ||
      !rating.cleanliness ||
      !rating.overall
    ) {
      return next(new ResponseHandler(null, 404, "Values Missing"));
    }


    const sum = Object.values(rating).reduce((accumulator:number, currentValue:any) => accumulator + currentValue, 0);
     let average = sum/Object.values(rating).length;
     average = average.toFixed(1) as any;
     
    const restaurantIndex = restaurantsData.findIndex(
      (data) => data.restaurantName === restaurantName
    );
    if (restaurantIndex !== -1) {
      restaurantsData[restaurantIndex].review.push({
        userName: userName,
        food: rating.food,
        ambiance: rating.ambiance,
        service: rating.service,
        cleanliness: rating.cleanliness,
        overAll: rating.overall,
        average:Number(average)
      } as any);
      return next(new ResponseHandler("review added!!", 200));
    }

    return next(new ResponseHandler(null, 404, "Resto not Found!!"));
  }
}

export const userSchema = new UserSchema();

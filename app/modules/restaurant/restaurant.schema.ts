import { NextFunction } from "express";
import { restaurantsData } from "../../database/usersData";
import { ResponseHandler } from "../../utilities/response-handler";

class RestaurantService {
  getAllReviews(id: string, next: NextFunction) {
    const restaurantIndex = restaurantsData.findIndex(
      (value) => value.id === id
    );
    if (restaurantIndex !== -1) {
      const reviews = restaurantsData[restaurantIndex].review;
      const restoName = restaurantsData[restaurantIndex].restaurantName;
      return { restoName, reviews };
    }
    next(new ResponseHandler(null, 404, "User Not Found"));
  }

  getAllReviewsAdmin(
    role: string,
    id: string,
    restoName: string,
    next: NextFunction
  ) {
    if (role === "admin") {
      const restaurantIndex = restaurantsData.findIndex(
        (data) => data.restaurantName === restoName && data.id === id
      );
      if (restaurantIndex !== -1) {
        const reviews = restaurantsData[restaurantIndex];
        return reviews;
      }
      return next(new ResponseHandler(null, 404, "Invalid Restaurant Name/id"));
    }
    return next(new ResponseHandler(null, 401, "UNAUTHORISED!!!"));
  }

  getAllRestaurant(next: NextFunction) {
    const allResto = restaurantsData.map((data) => data.restaurantName);
    if (allResto) {
      return next(new ResponseHandler(allResto, 200));
    }
    next(new ResponseHandler(null, 404, "No Restaurant Presnt"));
  }
}

export const restaurantService = new RestaurantService();

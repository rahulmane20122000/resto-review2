"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantService = void 0;
const restaurants_data_1 = require("../../database/restaurants-data");
const response_handler_1 = require("../utilities/response-handler");
class RestaurantService {
    getAllReviews(id, next) {
        const restaurantIndex = restaurants_data_1.restaurantsData.findIndex((value) => value.id === id);
        if (restaurantIndex !== -1) {
            const reviews = restaurants_data_1.restaurantsData[restaurantIndex].review;
            return reviews;
        }
        next(new response_handler_1.ResponseHandler(null, 404, "User Not Found"));
    }
    getAllReviewsAdmin(role, id, restoName, next) {
        if (role === "admin") {
            const restaurantIndex = restaurants_data_1.restaurantsData.findIndex((data) => data.restaurantName === restoName && data.id === id);
            if (restaurantIndex !== -1) {
                const reviews = restaurants_data_1.restaurantsData[restaurantIndex].review;
                let sum = 0;
                for (let index of reviews) {
                    sum += index.average;
                }
                let average = sum / reviews.length;
                average = average.toFixed(1);
                return next(new response_handler_1.ResponseHandler(Object.assign(Object.assign({}, restaurants_data_1.restaurantsData[restaurantIndex]), { lifeTimeRating: Number(average) }), 200));
            }
            return next(new response_handler_1.ResponseHandler(null, 404, "Invalid Restaurant Name/id"));
        }
        return next(new response_handler_1.ResponseHandler(null, 401, "UNAUTHORISED!!!"));
    }
    getAllRestaurant(next) {
        const allResto = restaurants_data_1.restaurantsData.map((data) => data.restaurantName);
        if (allResto) {
            return next(new response_handler_1.ResponseHandler(allResto, 200));
        }
        next(new response_handler_1.ResponseHandler(null, 404, "No Restaurant Presnt"));
    }
}
exports.restaurantService = new RestaurantService();
//# sourceMappingURL=review.schema.js.map
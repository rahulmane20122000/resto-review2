"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_handler_1 = require("../utilities/response-handler");
const review_schema_1 = require("./review.schema");
const getAllReview = (id, next) => {
    const reviews = review_schema_1.restaurantService.getAllReviews(id, next);
    return reviews.length !== 0
        ? next(new response_handler_1.ResponseHandler(reviews, 200))
        : next(new response_handler_1.ResponseHandler(null, 404, "No Reviews"));
};
const getAllReviewAdmin = (role, id, restoName, next) => {
    const response = review_schema_1.restaurantService.getAllReviewsAdmin(role, id, restoName, next);
    return response;
};
const getAllRestaurant = (next) => {
    const response = review_schema_1.restaurantService.getAllRestaurant(next);
    return response;
};
exports.default = { getAllReview, getAllReviewAdmin, getAllRestaurant };
//# sourceMappingURL=review.service.js.map
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const restaurants_data_1 = require("../../database/restaurants-data");
const response_handler_1 = require("../utilities/response-handler");
class UserSchema {
    postReview(reviewDetails, next) {
        const { restaurantName, userName } = reviewDetails, rating = __rest(reviewDetails, ["restaurantName", "userName"]);
        if (!restaurantName || !userName) {
            return next(new response_handler_1.ResponseHandler(null, 404, "restaurant Name or userName missing!!!"));
        }
        if (!rating.food ||
            !rating.ambiance ||
            !rating.service ||
            !rating.cleanliness ||
            !rating.overall) {
            return next(new response_handler_1.ResponseHandler(null, 404, "Values Missing"));
        }
        const sum = Object.values(rating).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let average = sum / Object.values(rating).length;
        average = average.toFixed(1);
        const restaurantIndex = restaurants_data_1.restaurantsData.findIndex((data) => data.restaurantName === restaurantName);
        if (restaurantIndex !== -1) {
            restaurants_data_1.restaurantsData[restaurantIndex].review.push({
                userName: userName,
                food: rating.food,
                ambiance: rating.ambiance,
                service: rating.service,
                cleanliness: rating.cleanliness,
                overAll: rating.overall,
                average: Number(average)
            });
            return next(new response_handler_1.ResponseHandler("review added!!", 200));
        }
        return next(new response_handler_1.ResponseHandler(null, 404, "Resto not Found!!"));
    }
}
exports.userSchema = new UserSchema();
//# sourceMappingURL=user.schema.js.map
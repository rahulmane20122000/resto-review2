"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_authorisation_1 = require("../utilities/authentication-authorisation");
const review_service_1 = __importDefault(require("./review.service"));
const router = (0, express_1.Router)();
const { getAllReview, getAllReviewAdmin, getAllRestaurant } = review_service_1.default;
router.get("/getAllRestaurant", (req, res, next) => {
    getAllRestaurant(next);
});
router.get("/manager/getMyReviews", authentication_authorisation_1.authorization, (req, res, next) => {
    const id = res.locals.id;
    getAllReview(id, next);
});
router.get("/admin/getAllReviews/:restoName/:id", authentication_authorisation_1.authorization, (req, res, next) => {
    const role = res.locals.role;
    const id = req.params.id;
    const restoName = req.params.restoName;
    getAllReviewAdmin(role, id, restoName, next);
});
exports.default = router;
//# sourceMappingURL=review.routes.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_service_1 = __importDefault(require("./user.service"));
const router = (0, express_1.Router)();
const { postReview } = user_service_1.default;
router.post("/", (req, res, next) => {
    postReview(req.body, next);
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const postReview = (reviewDetails, next) => {
    const response = user_schema_1.userSchema.postReview(reviewDetails, next);
    return response;
};
exports.default = { postReview };
//# sourceMappingURL=user.service.js.map
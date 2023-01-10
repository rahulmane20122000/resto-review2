"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const restaurants_data_1 = require("../../database/restaurants-data");
const response_handler_1 = require("./response-handler");
const loginValidator = (req, res, next) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
        next(new response_handler_1.ResponseHandler(null, 404, "Invalid Credentials!!"));
    }
    const userIndex = restaurants_data_1.loginDetails.findIndex((data) => data.userName === userName && data.password === password);
    if (userIndex !== -1) {
        return next();
    }
    next(new response_handler_1.ResponseHandler(null, 404, "user Not Found"));
};
exports.loginValidator = loginValidator;
//# sourceMappingURL=login-validator.js.map
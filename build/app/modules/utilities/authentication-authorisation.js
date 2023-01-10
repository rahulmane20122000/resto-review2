"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = exports.authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const restaurants_data_1 = require("../../database/restaurants-data");
const response_handler_1 = require("./response-handler");
const authentication = (req, res, next) => {
    const { userName, password } = req.body;
    if (req.headers.authorization)
        return next();
    const userIndex = restaurants_data_1.loginDetails.findIndex((data) => data.userName === userName && data.password === password);
    if (userIndex !== -1) {
        const token = jsonwebtoken_1.default.sign(restaurants_data_1.loginDetails[userIndex], process.env.JWT_KEY);
        return next(new response_handler_1.ResponseHandler({ token: token, role: restaurants_data_1.loginDetails[userIndex].role }, 200));
    }
    next(new response_handler_1.ResponseHandler(null, 401, "UNAUTHORISED!!!"));
};
exports.authentication = authentication;
const authorization = (req, res, next) => {
    const authHeaders = req.headers.token;
    const verified = jsonwebtoken_1.default.verify(authHeaders, process.env.JWT_KEY);
    res.locals = verified;
    console.log(verified);
    if (verified) {
        return next();
    }
    return next(new response_handler_1.ResponseHandler(null, 404, "Token Not Found"));
};
exports.authorization = authorization;
//# sourceMappingURL=authentication-authorisation.js.map
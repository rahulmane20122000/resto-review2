"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerApp = void 0;
const express_1 = require("express");
const routes_data_1 = require("./routes.data");
const cors_1 = __importDefault(require("cors"));
const registerApp = (app) => {
    app.use((0, cors_1.default)());
    app.use((0, express_1.json)());
    for (let route of routes_data_1.routes) {
        app.use(route.path, route.router);
    }
    app.use((response, req, res, next) => {
        res.status(response.statusCode || 500).send(response);
    });
};
exports.registerApp = registerApp;
//# sourceMappingURL=routes.register.js.map
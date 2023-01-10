"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const routes_types_1 = require("./routes.types");
const user_routes_1 = __importDefault(require("../users/user.routes"));
const auth_routes_1 = __importDefault(require("../auth/auth.routes"));
const review_routes_1 = __importDefault(require("../review/review.routes"));
exports.routes = [
    new routes_types_1.Route("/auth", auth_routes_1.default),
    new routes_types_1.Route("/users", user_routes_1.default),
    new routes_types_1.Route("/role", review_routes_1.default),
];
//# sourceMappingURL=routes.data.js.map
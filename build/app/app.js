"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = void 0;
const express_1 = __importDefault(require("express"));
const routes_register_1 = require("./modules/routes/routes.register");
const startApp = () => {
    const app = (0, express_1.default)();
    const { PORT } = process.env;
    (0, routes_register_1.registerApp)(app);
    app.listen(PORT, () => console.log(`server listening at port : ${PORT}`));
};
exports.startApp = startApp;
//# sourceMappingURL=app.js.map
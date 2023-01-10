"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_authorisation_1 = require("../utilities/authentication-authorisation");
const login_validator_1 = require("../utilities/login-validator");
const router = (0, express_1.Router)();
router.post('/login', login_validator_1.loginValidator, authentication_authorisation_1.authentication);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map
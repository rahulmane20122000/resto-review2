"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
class ResponseHandler {
    constructor(data, statusCode, error = null) {
        this.data = data;
        this.statusCode = statusCode;
        this.error = error;
    }
}
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=response-handler.js.map
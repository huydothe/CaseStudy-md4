"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const product_model_1 = __importDefault(require("../model/product.model"));
class UserController {
    constructor() {
        this.productModel = new product_model_1.default();
    }
    ;
    userList(req, res, next) {
        res.render('User-List');
    }
    ;
    createUser(req, res, next) {
        res.render('form-create');
    }
    ;
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map
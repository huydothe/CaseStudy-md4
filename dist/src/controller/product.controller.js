"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_model_1 = __importDefault(require("../model/product.model"));
class ProductController {
    async showAllProduct() {
        await product_model_1.default.find();
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map
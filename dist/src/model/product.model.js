"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    identity: String,
    price: Number,
    stocking: Boolean,
    description: String,
    made_in: String
});
const ProductModel = (0, mongoose_1.model)('products', productSchema);
exports.default = ProductModel;
//# sourceMappingURL=product.model.js.map
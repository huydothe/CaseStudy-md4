"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    email: String,
    age: Number,
    address: String,
    phone: Number
});
const UserModel = (0, mongoose_1.model)('user', userSchema);
exports.default = UserModel;
//# sourceMappingURL=user.model.js.map
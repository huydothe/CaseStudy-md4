"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const page_controller_1 = require("../controller/page.controller");
const product_controller_1 = require("../controller/product.controller");
const router = express_1.default.Router();
const userController = new user_controller_1.UserController();
const pageController = new page_controller_1.PageController();
const productController = new product_controller_1.ProductController();
router.get('/', (req, res, next) => {
    pageController.showHomePage(req, res, next);
});
router.get('/product/product-detail', (req, res, next) => {
    pageController.productDetail(req, res, next);
});
router.get('/admin/home', (req, res, next) => {
    pageController.showAdminPage(req, res, next);
});
router.get('/admin/user-list', (req, res, next) => {
    userController.userList(req, res, next);
});
router.get('/admin/create-user', (req, res, next) => {
    userController.createUser(req, res, next);
});
router.get('/admin/product-list', (req, res, next) => {
    productController.showAllProduct()
        .then(data => {
        return res.render('product_list', { products: data });
    }).catch(err => {
        console.log(err.message);
    });
});
exports.default = router;
//# sourceMappingURL=product.router.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageController = void 0;
class PageController {
    constructor() {
    }
    showHomePage(req, res, next) {
        res.render('homepage');
    }
    ;
    productDetail(req, res, next) {
        res.render('product_detail');
    }
    ;
    showAdminPage(req, res, next) {
        res.render('admin_page');
    }
    ;
}
exports.PageController = PageController;
//# sourceMappingURL=page.controller.js.map
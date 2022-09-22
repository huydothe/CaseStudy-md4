"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor() {
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
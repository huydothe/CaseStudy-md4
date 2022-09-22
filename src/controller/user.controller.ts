import {Request,Response,NextFunction} from "express";

export class UserController {

    productModel;

    constructor() {

    };

    userList(req:Request, res:Response, next:NextFunction){
        res.render('User-List');
    };

    createUser(req:Request, res:Response, next:NextFunction){
        res.render('form-create');
    };

}
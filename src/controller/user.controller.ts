import ProductModel from "../model/product.model";
import {Request,Response,NextFunction} from "express";

export class UserController {

    productModel;

    constructor() {
        this.productModel = new ProductModel();
    };

    userList(req:Request, res:Response, next:NextFunction){
        res.render('User-List');
    };

    createUser(req:Request, res:Response, next:NextFunction){
        res.render('form-create');
    };

}
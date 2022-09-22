import {Request,Response,NextFunction} from "express";

export class PageController {
    constructor() {
    }

    showHomePage(req:Request, res:Response, next:NextFunction){
        res.render('homepage');
    };

    productDetail(req:Request, res:Response, next:NextFunction){
        res.render('product_detail');
    };

    showAdminPage(req:Request, res:Response, next:NextFunction){
        res.render('admin_page');
    };

}
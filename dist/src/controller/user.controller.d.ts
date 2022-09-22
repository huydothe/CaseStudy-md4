import { Request, Response, NextFunction } from "express";
export declare class UserController {
    productModel: any;
    constructor();
    userList(req: Request, res: Response, next: NextFunction): void;
    createUser(req: Request, res: Response, next: NextFunction): void;
}

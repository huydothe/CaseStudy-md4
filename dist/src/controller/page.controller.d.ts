import { Request, Response, NextFunction } from "express";
export declare class PageController {
    constructor();
    showHomePage(req: Request, res: Response, next: NextFunction): void;
    productDetail(req: Request, res: Response, next: NextFunction): void;
    showAdminPage(req: Request, res: Response, next: NextFunction): void;
}

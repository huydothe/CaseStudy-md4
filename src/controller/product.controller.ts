import ProductModel from "../model/product.model";
import {Request,Response,NextFunction} from "express";
import productModel from "../model/product.model";

export class ProductController{

    async showAllProduct(){
        await ProductModel.find();
    }
}
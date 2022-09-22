import express from "express";
import bodyParser from "body-parser";
import {UserController} from "../controller/user.controller";
import {PageController} from "../controller/page.controller";
import {ProductController} from "../controller/product.controller";


const router = express.Router();
const userController = new UserController();
const pageController = new PageController();
const productController = new ProductController();

router.get('/', (req,res,next)=>{
    pageController.showHomePage(req, res, next);
});

router.get('/product/product-detail',(req,res,next)=>{
    pageController.productDetail(req, res, next);
})

router.get('/admin/home',(req,res,next)=>{
    pageController.showAdminPage(req,res,next);
})

router.get('/admin/user-list',(req, res, next)=>{
    userController.userList(req,res,next);
});

router.get('/admin/create-user',(req, res, next)=>{
    userController.createUser(req,res,next);
});

router.get('/admin/product-list',(req, res, next)=>{
    productController.showAllProduct()
        .then(data=>{
            return res.render('product_list',{products : data});
        }).catch(err => {
            console.log(err.message)
    });
});

export default router;
import express from "express";
import bodyParser from "body-parser";
import {UserController} from "../controller/user.controller";
import {PageController} from "../controller/page.controller";


const router = express.Router();
const userController = new UserController();
const pageController = new PageController()

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

export default router;
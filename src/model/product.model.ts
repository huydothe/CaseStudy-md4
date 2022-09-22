import {Schema, model} from "mongoose";
import {IProduct} from "./interface/Product_Interface";

const productSchema = new Schema<IProduct>({
    name : String,
    identity : String,
    price : Number,
    stocking : Boolean,
    description : String,
    made_in : String,
    image : String
});

const ProductModel = model('views', productSchema);

export default ProductModel;





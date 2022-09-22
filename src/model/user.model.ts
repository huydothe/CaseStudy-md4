import {IUser} from "./interface/User_Interface";
import {Schema, model} from "mongoose";

const userSchema = new Schema<IUser>({
    name : String,
    email : String,
    age : Number,
    address : String,
    phone : Number
});

const UserModel = model<IUser>('user',userSchema);

export default UserModel;
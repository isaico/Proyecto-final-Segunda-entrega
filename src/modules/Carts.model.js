import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    producto:{
        type:Object,
        required:true
    },
    fecha:{
        type:String
    },
    // _id:{
    //     type:String,
    //     // required:true
    // }
})
export const CartsModel = mongoose.model('Carts',Schema)
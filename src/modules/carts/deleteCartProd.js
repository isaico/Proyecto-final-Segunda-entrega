import { CartsModel } from "../Carts.model.js";
import '../../configs/db.config.js'

export const deleteCartProductDB = async (id)=>{
    try {
        const resp = await CartsModel.deleteOne({_id:id})
        return resp
    } catch (error) {
        console.log(error)
    }
}
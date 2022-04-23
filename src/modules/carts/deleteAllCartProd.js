import { CartsModel } from "../Carts.model.js";
import '../../configs/db.config.js'

export const deleteAllCartProdsDB =  async ()=>{
    try {
        const resp = await CartsModel.deleteMany({})
    } catch (error) {
        console.log(error)
    }
}
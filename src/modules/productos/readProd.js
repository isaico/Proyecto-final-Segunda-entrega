import { ProductsModel } from "../Products.model.js";
import '../../configs/db.config.js'

export const readProdDB = async (id)=>{
    try {
        const resp= await ProductsModel.findOne({_id:id}) //retorna null de no encontrar algo
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
    }
}

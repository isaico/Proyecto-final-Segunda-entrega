import { ProductsModel } from "../Products.model.js";
import '../../configs/db.config.js'

export const updateProdDB = async (id,field,value)=>{
    try {
        const resp= await ProductsModel.updateOne({_id:id},
        {
            $set:{field:value},
            $currentDate: { lastModified: true }
        })
        console.log(resp)
        return resp
    } catch (error) {
        console.log(error)
    }
}

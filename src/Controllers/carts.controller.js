import res from 'express/lib/response';
import {
  addProductToCartDB,
  deleteAllCartProdsDB,
  deleteCartProductDB,
  readAllCartProductsDB,
} from '../modules/index.js';

export const getCart = async()=>{
    try {
        const dbResProducts = await readAllCartProductsDB()
        if(dbResProducts){
            res.send(dbResProducts)
        } else{
            if (dbResProducts.length === 0){
                res.send("El carrito esta vacío")
            }else{
                const error = new Error (`El carrito no existe`)
                error.code = 'CART_NOT_FOUND'
                throw error
            }
        }
    } catch (error) {
        return next(error)
    }
}

export const addProductToCart = async (req, resp, next) => {
  try {
    const {id}=req.params.id
    const 
    const dbRes = await addProductToCartDB();


  } catch (error) {}
};

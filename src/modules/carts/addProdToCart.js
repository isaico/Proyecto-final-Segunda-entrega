import { CartsModel } from '../Carts.model.js';
import '../../configs/db.config.js';


export const addProductToCartDB = async (product) => {
  try {
    const resp = await CartsModel.create({ producto: product });//tengo q agregarle el campo ID una vez que la lectura sea de la DB
    return resp;                
  } catch (error) {
      console.log(error)
  }
};

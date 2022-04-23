import { addProductDB } from "./productos/addProd.js";
import {deleteProductDB } from './productos/deleteProd.js'
import { readProdDB } from "./productos/readProd.js";
import {addProductToCartDB} from './carts/addProdToCart.js'
import {producto1} from '../objectTest/test.js'
import { deleteCartProductDB } from "./carts/deleteCartProd.js";
import { deleteAllCartProdsDB } from "./carts/deleteAllCartProd.js";
// addProductDB({descripcion:"algo",precio:1,foto:"nada",stock:2})
//addProductDB({producto1})
// deleteProductDB("62641fef5c8ae348a8b7a508")
// readProdDB("62641fef5c8ae348a8b7a508") //retorna null ya que fue eliminado
// addProductToCartDB(producto1)
// deleteCartProductDB("626435ba2792b51549632132")
// deleteAllCartProdsDB()
export * from './productos/index.js'
export * from './carts/index.js'
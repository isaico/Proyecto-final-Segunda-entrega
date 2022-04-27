import res from 'express/lib/response';
import { getCartDB } from '../modules/carts/getCart.js';
import {
  addProductToCartDB,
  deleteAllCartsDB,
  deleteCartProductDB,
  readAllCartProductsDB,
  createCartDB,
} from '../modules/index.js';

export const createCart = async (req, res, next) => {
  try {
    const dbResp = await createCartDB();
    if (dbResp) {
      res.send({ id: dbResp });
    } else {
      throw dbResp;
    }
  } catch (error) {
    next(error);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const { cartId } = req.params.id;
    const cart = await getCartDB(cartId);

    if (cart) {
      res.send(cart);
    } else {
      const error = new Error(`El carrito con id ${cartId} no existe`);
      error.code = 'CART_NOT_FOUND';
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};

export const addProductToCart = async (req, resp, next) => {
  try {
    const { cartId } = req.params.id;
    const { productId } = req.params.productId;
    const { qty } = req.body.amount;
    const dbRes = await addProductToCartDB(cartId, productId, qty);
    if (dbRes) {
      res.send(
        `Producto con id ${productId} añadido al carrito con id ${cartId}`
      );
    } else {
      throw dbRes;
    }
  } catch (error) {
    error.status = 500;
    next(error);
  }
};

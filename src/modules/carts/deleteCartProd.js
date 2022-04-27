import { Cart_items } from '../Cart_Items.model.js';
import '../../configs/db.config.js';

export const deleteCartProductDB = async (productId, cartId) => {
  try {
    const resp = await Cart_items.deleteOne({
      product_id: productId,
      cart_id: cartId,
    });
    console.log(resp)
    return resp;
  } catch (error) {
    console.log(error);
    return error
  }
};

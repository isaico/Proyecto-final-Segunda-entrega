import {
  addProductDB,
  deleteProductDB,
  readAllProductsDB,
  readProdDB,
} from '../modules/index.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await readAllProductsDB();
    res.send(products);
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (req, res, next) => {
    try {
        const newProduct={
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            stock: req.body.stock,
            precio: req.body.precio,
            foto: req.body.foto
        }
        const dbRes = await addProductDB(newProduct)
        if (dbRes){
          res.send({...newProduct,_id:dbRes})  
        }else{
            throw dbRes
        }
    } catch (error) {
        next(error)
    }
};
export const deleteProduct=async(req,resp,next)=>{
    
}


import { Router } from 'express';
import { ProductModel } from '../models/products.js';
import { CartModel } from '../models/carts.js';

const router = Router();

router.get('/products', async (req, res) => {
  const products = await ProductModel.find().lean();
  res.render('products', { products });  
});

router.get('/products/:pid', async (req, res) => {
  const product = await ProductModel.findById(req.params.pid).lean();
  res.render('productDetail', product);
});

router.get('/carts/:cid', async (req, res) => {
  const cart = await CartModel.findById(req.params.cid).populate('products.product').lean();
  res.render('cart', cart);
});

export default router;

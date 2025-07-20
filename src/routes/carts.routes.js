import { Router } from "express";
import { CartModel } from "../models/carts.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const cart = await CartModel.create({ products: [] });
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:cid", async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.cid).populate("products.product");
    if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:cid/products/:pid", async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.cid);
    if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });

    cart.products = cart.products.filter(p => p.product.toString() !== req.params.pid);
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:cid", async (req, res) => {
  try {
    const { products } = req.body;
    const cart = await CartModel.findByIdAndUpdate(
      req.params.cid,
      { products },
      { new: true }
    );
    if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.put("/:cid/products/:pid", async (req, res) => {
  try {
    const { quantity } = req.body;
    const cart = await CartModel.findById(req.params.cid);
    if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });

    const prod = cart.products.find(p => p.product.toString() === req.params.pid);
    if (!prod) return res.status(404).json({ error: "Producto no está en el carrito" });

    prod.quantity = quantity;
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:cid", async (req, res) => {
  try {
    const cart = await CartModel.findById(req.params.cid);
    if (!cart) return res.status(404).json({ error: "Carrito no encontrado" });

    cart.products = [];
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
import { Router } from "express";
import { ProductModel } from "../models/products.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const sort = req.query.sort === "asc" ? 1 : req.query.sort === "desc" ? -1 : null;
    const query = req.query.query || "";

    let filter = {};
    if (query) {
      if (query === "true" || query === "false") {
        filter.status = query === "true";
      } else {
        filter.category = query;
      }
    }

    let options = {
      limit,
      page,
      lean: true,
    };
    if (sort) {
      options.sort = { price: sort };
    }

    const result = await ProductModel.paginate(filter, options);

    res.json({
      status: "success",
      payload: result.docs,
      totalPages: result.totalPages,
      prevPage: result.prevPage,
      nextPage: result.nextPage,
      page: result.page,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
      prevLink: result.hasPrevPage ? `/api/products?page=${result.prevPage}&limit=${limit}` : null,
      nextLink: result.hasNextPage ? `/api/products?page=${result.nextPage}&limit=${limit}` : null,
    });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
});

router.get('/:pid', async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.pid);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const product = req.body;
    const requiredFields = ['title', 'description', 'code', 'price', 'status', 'stock', 'category', 'thumbnails'];
    for (const field of requiredFields) {
      if (product[field] === undefined) {
        return res.status(400).json({ error: `Falta el campo obligatorio: ${field}` });
      }
    }
    const addedProduct = await ProductModel.create(product);
    res.status(201).json(addedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:pid', async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.pid, req.body, { new: true });
    if (!updatedProduct) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:pid', async (req, res) => {
  try {
    const deleted = await ProductModel.findByIdAndDelete(req.params.pid);
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;

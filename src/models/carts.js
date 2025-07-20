import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product" // Este string debe ser IGUAL al primer parámetro del model de productos
      },
      quantity: {
        type: Number,
        required: true,
        default: 1
      }
    }
  ]
});

export const CartModel = mongoose.model("Cart", cartSchema);
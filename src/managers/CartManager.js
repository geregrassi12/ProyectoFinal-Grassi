import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pathToFile = join(__dirname, '../data/carts.json');

export class CartManager {
  constructor() {
    this.path = pathToFile;
  }

  async getCarts() {
    try {
      const data = await fs.readFile(this.path, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error al leer los carritos:', error);
      return [];
    }
  }

  async getCartById(cid) {
    const carts = await this.getCarts();
    return carts.find(c => c.id === cid);
  }

  async createCart() {
    const carts = await this.getCarts();
    const newCart = {
      id: crypto.randomUUID(),
      products: []
    };
    carts.push(newCart);
    await fs.writeFile(this.path, JSON.stringify(carts, null, 2));
    return newCart;
  }

  async addProductToCart(cid, pid) {
    const carts = await this.getCarts();
    const cartIndex = carts.findIndex(c => c.id === cid);
    if (cartIndex === -1) return null;

    const cart = carts[cartIndex];
    const productInCart = cart.products.find(p => p.product === pid);

    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      cart.products.push({ product: pid, quantity: 1 });
    }

    carts[cartIndex] = cart;
    await fs.writeFile(this.path, JSON.stringify(carts, null, 2));
    return cart;
  }
}

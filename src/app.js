import express from 'express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { engine } from 'express-handlebars';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import productsRouter from './routes/products.routes.js';
import cartsRouter from './routes/carts.routes.js';
import ProductManager from './managers/ProductManager.js';
import { connectMongo } from './config/mongo.js';



connectMongo(); 

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer);

const productManager = new ProductManager();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(join(__dirname, 'public')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', join(__dirname, 'views'));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.get('/', async (req, res) => {
  const products = await productManager.getProducts();
  res.render('home', { products });
});

app.get('/realtimeproducts', async (req, res) => {
  const products = await productManager.getProducts();
  res.render('realTimeProducts', { products });
});

io.on('connection', async (socket) => {
  console.log('Nuevo cliente conectado a WebSocket');

  socket.emit('products', await productManager.getProducts());

  socket.on('addProduct', async (product) => {
    await productManager.addProduct(product);
    const updatedProducts = await productManager.getProducts();
    io.emit('products', updatedProducts); 
  });

  
  socket.on('deleteProduct', async (id) => {
    await productManager.deleteProduct(id);
    const updatedProducts = await productManager.getProducts();
    io.emit('products', updatedProducts); 
  });
});

const PORT = 8080;
httpServer.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});




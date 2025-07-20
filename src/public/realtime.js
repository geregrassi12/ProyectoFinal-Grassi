const socket = io();

socket.on('products', products => {
  const list = document.getElementById('products-list');
  list.innerHTML = '';
  products.forEach(prod => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${prod.title}</strong> - $${prod.price}
      <br>${prod.description}
      <button onclick="deleteProduct('${prod.id}')">Eliminar</button>`;
    li.setAttribute('data-id', prod.id);
    list.appendChild(li);
  });
});

document.getElementById('add-product-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  data.price = Number(data.price);
  data.stock = Number(data.stock);
  socket.emit('addProduct', data);
  e.target.reset();
});

function deleteProduct(id) {
  socket.emit('deleteProduct', id);
}

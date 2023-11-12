let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategoria = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(productos => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${productos.imagen}" alt="${productos.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${productos.titulo}</h3>
            <p class="producto-precio">$${productos.precio}</p>
            <button class="producto-agregar" id="${productos.id}">AGREGAR</button>
        </div>
        `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar()
}
cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(productos => productos.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

            const productosCategoria = productos.find(productos => productos.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado!",
        duration: 3000,
        close: false,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
                background: "linear-gradient(to right, #0F1026, #0F1026)",
                borderRadius: '2rem'
            },
            offset: {
                x: '1rem',
                y: '1rem'
            }, 
            onClick: function () { } // Callback after click
        }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(productos => productos.id === idBoton);

    if (productosEnCarrito.some(productos => productos.id === idBoton)) {
        const index = productosEnCarrito.findIndex(productos => productos.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, productos) => acc + productos.cantidad, 0)
    numerito.innerText = nuevoNumerito;
}
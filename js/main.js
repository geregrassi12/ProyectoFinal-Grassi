const productos = [
    {
        id: "low-01",
        titulo: "Sneakers Low 01",
        imagen: "./img/forum-low/zapatillas-forum-low-1.png",
        categoria: {
            nombre: "Sneakers Low",
            id: "low"
        },
        precio: 5500
    },
    {
        id: "low-02",
        titulo: "Sneakers Low 02",
        imagen: "./img/forum-low/zapatillas-forum-low-2.png",
        categoria: {
            nombre: "Sneakers Low",
            id: "low"
        },
        precio: 5500
    },
    {
        id: "low-03",
        titulo: "Sneakers Low 03",
        imagen: "./img/forum-low/zapatillas-forum-low-3.png",
        categoria: {
            nombre: "Sneakers Low",
            id: "low"
        },
        precio: 5500
    },
    {
        id: "low-04",
        titulo: "Sneakers Low 04",
        imagen: "./img/forum-low/zapatillas-forum-low-4.png",
        categoria: {
            nombre: "Sneakers Low",
            id: "low"
        },
        precio: 5500
    },
    {
        id: "mid-01",
        titulo: "Sneakers Mid 01",
        imagen: "./img/forum-mid/zapatillas-forum-mid-1.png",
        categoria: {
            nombre: "Sneakers Mid",
            id: "mid"
        },
        precio: 10000
    },
    {
        id: "mid-02",
        titulo: "Sneakers Mid 02",
        imagen: "./img/forum-mid/zapatillas-forum-mid-2.png",
        categoria: {
            nombre: "Sneakers Mid",
            id: "mid"
        },
        precio: 10000
    },
    {
        id: "mid-03",
        titulo: "Sneakers Mid 03",
        imagen: "./img/forum-mid/zapatillas-forum-mid-3.png",
        categoria: {
            nombre: "Sneakers Mid",
            id: "mid"
        },
        precio: 10000
    },
    {
        id: "mid-04",
        titulo: "Sneakers Mid 04",
        imagen: "./img/forum-mid/zapatillas-forum-mid-4.png",
        categoria: {
            nombre: "Sneakers Mid",
            id: "mid"
        },
        precio: 10000
    },
    {
        id: "mid-05",
        titulo: "Sneakers Mid 05",
        imagen: "./img/forum-mid/zapatillas-forum-mid-5.png",
        categoria: {
            nombre: "Sneakers Mid",
            id: "mid"
        },
        precio: 10000
    },
    {
        id: "running-01",
        titulo: "Running 1",
        imagen: "./img/running/zapatillas-forum-run-1.png",
        categoria: {
            nombre: "Runinng",
            id: "running"
        },
        precio: 7500
    },
    {
        id: "running-02",
        titulo: "Running 2",
        imagen: "./img/running/zapatillas-forum-run-2.png",
        categoria: {
            nombre: "Runinng",
            id: "running"
        },
        precio: 7500
    },
    {
        id: "running-03",
        titulo: "Running 3",
        imagen: "./img/running/zapatillas-forum-run-3.png",
        categoria: {
            nombre: "Runinng",
            id: "running"
        },
        precio: 7500
    },
    {
        id: "running-04",
        titulo: "Running 4",
        imagen: "./img/running/zapatillas-forum-run-4.png",
        categoria: {
            nombre: "Runinng",
            id: "running"
        },
        precio: 7500
    },
    {
        id: "running-05",
        titulo: "Running 5",
        imagen: "./img/running/zapatillas-forum-run-5.png",
        categoria: {
            nombre: "Runinng",
            id: "running"
        },
        precio: 7500
    },
    {
        id: "running-06",
        titulo: "Running 6",
        imagen: "./img/running/zapatillas-forum-run-6.png",
        categoria: {
            nombre: "Runinng",
            id: "running"
        },
        precio: 7500
    },

];

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

botonesCategoria.forEach(boton =>{
    boton.addEventListener("click", (e) => {
        botonesCategoria.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productosBoton = productos.filter(producto  => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);

            const productosCategoria = productos.find(productos => productos.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productosCategoria.categoria.nombre;
        } else{
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

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(productos => productos.id === idBoton);

    if (productosEnCarrito.some(productos => productos.id === idBoton)) {
        const index = productosEnCarrito.findIndex(productos => productos.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else{
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
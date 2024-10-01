const products = [
    {
        id: "1",
        tittle: "Sneakers Low 01",
        image: "../img/zapatillas-forum-low-1.png",
        category: 'low',
        price: '5500',
        description: 'Talles: 44, 45 y 46',
    },
    {
        id: "2",
        tittle: "Sneakers Low 02",
        image: "../img/zapatillas-forum-low-2.png",
        category: 'low',
        price: '5000',
        description: 'Talles: 40, 41 y 45',
    },
    {
        id: "3",
        tittle: "Sneakers Low 03",
        image: "../img/zapatillas-forum-low-3.png",
        category: 'low',
        price: '7500',
        description: 'Talles: 40, 42 y 43',
    },
    {
        id: "4",
        tittle: "Sneakers Low 04",
        image: "../img/zapatillas-forum-low-4.png",
        category: 'low',
        price: '15500',
        description: 'Talles: 39, 40 y 42',
    },
    {
        id: "5",
        tittle: "Sneakers Mid 01",
        image: "../img/zapatillas-forum-low-1.png",
        category: 'mid',
        price: '15500',
        description: 'Talles: 38, 40 y 44',
    },
    {
        id: "6",
        tittle: "Sneakers Mid 02",
        image: "../img/zapatillas-forum-mid-2.png",
        category: 'mid',
        price: '15500',
        description: 'Talles: 44, 43 y 42',
    },
];

export const getProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    }, 2000)
})

export const getProduct = (id) => {
    return products.find((prod) => prod.id == id)
}



export const getCategory = (category) => {
    return products.filter((product) => product.category === category);
}
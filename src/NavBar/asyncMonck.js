const productos = [
    {
        id:"1",
        name: "jamon",
        img: "",
        stock: "10",
        description: "jamon natural de fabricacion propia",
    },
    {
        id:"2",
        name: "mortadela",
        img: "",
        stock: "15",
        description: "mortadela de 1ª callidad Paladini",
    },
    {
        id:"3",
        name: "salame",
        img: "",
        stock: "25",
        description: "salame picado fino ahumado",
    },
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productos)
        }, 500)
    })
}
export const getProductById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === productId))
        }, 500)
    })
}
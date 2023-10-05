import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductById, getProducts } from "../NavBar/asyncMonck"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getProductById("1")
        .then(response=>{
            setProduct(response)
        })
        .catch(error=>{
            console.error(error)
        })
    }, [])
    return(
        <div className="ItemDetailContainer">
            <ItemDetail{...product}/>
        </div>
    )
}

export default ItemDetailContainer
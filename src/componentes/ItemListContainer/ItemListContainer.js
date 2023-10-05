import { useState, useEffect } from "react";
import { getProducts } from "../../NavBar/asyncMonck";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({greeting}) =>{
    return(
        <div>
            <h1>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer
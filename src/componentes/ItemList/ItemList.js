import "./ItemList.css"
import Item from "../Item/item"

const ItemList = ({productos}) => {
    return (
        <div className="Listgroup">
            {productos.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList
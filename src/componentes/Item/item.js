import "./Item.css"
import "bulma/css/bulma.css";

const Item = ({id, name, img, price, stock}) =>{
    return(
        <article className="CardItem">
            <header className="header">
                <h2 className="IteamHeader">
                    {name}
                </h2>
            </header>

            <picture>
                <img src={img} alt= {name} className="ItemImg"/>
            </picture>

            <section>
                <P className="info">
                    Precio: ${price}
                </P>
                
                <P className="info">
                    stock disponible: {stock}
                </P>
            </section>

            <footer className="ItemFooter">
                <button className="Option">ver detalle</button>
            </footer>
        </article>
    )
}

export default Item;
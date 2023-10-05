import CartWidget from "../componentes/CartWidget/CartWidget";

const NavBar =() =>{
    return(
        <nav className="hero">
            <div className= "hero is-primary">
            <h1  className= "title">TORO Y GRINGO</h1>
            <h2 className="subtitle">fiambreria</h2>
            <CartWidget/>
            </div>
            <div className="colums">
                <div className="column is-one-third">
                <button >EMBUTIDOS</button>
                </div>
                <div className="column">
                <button>QUESOS</button>
                </div>
                <div className="column">
                <button>VINOS</button>
                </div>
            </div>
            
        </nav>
    );
}

export default NavBar
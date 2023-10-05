import "bulma/css/bulma.css";
import NavBar from "./NavBar";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContairner/ItemDetailContainer";


function App(){

    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting={"hola"}/>
            <ItemDetailContainer/>
        </div>
    );
}

export default App;
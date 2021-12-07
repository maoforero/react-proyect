import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListcontainer = () => {
    return (
        <div className="ItemListContainer">
            <h1 className="mainTitle">Premiere</h1>
            <ItemList />
        </div>
    )
}

export default ItemListcontainer

//Aqui se va a realizar la clasificacion de los items y se mostrara lo seleccionado -- Seleccionar por categoria
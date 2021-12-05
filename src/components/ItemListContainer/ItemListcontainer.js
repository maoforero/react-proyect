import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';

const ItemListcontainer = () => {
    return (
        <div className="ItemListContainer">
            <h1 className="mainTitle">Peliculas en cartelera</h1>
            <ItemList />
        </div>
    )
}

export default ItemListcontainer

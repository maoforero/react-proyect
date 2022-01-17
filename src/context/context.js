import React, {useState, useEffect, createContext} from "react";
import Data from '../list.json';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const productos = Data
        setProductos(productos)
    }, [])

    
    const value ={
        productos: [productos],
        menu: [menu, setMenu]
    }

    return(
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}



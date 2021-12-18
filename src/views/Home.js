import React from 'react'
import ItemListcontainer from '../components/ItemListContainer/ItemListcontainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

const Home = () => {
    return (
        <>
            <h1>Home</h1> 
            <ItemListcontainer/>
            <ItemDetailContainer/>
            
        </>
    )
}

export default Home

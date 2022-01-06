import React from 'react'
import ItemListcontainer from '../../components/ItemListContainer/ItemListcontainer'
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {
    return (
        <>
            <h1>Home</h1> 
            <SearchBar/>
            <ItemListcontainer/>
        </>
    )
}

export default Home

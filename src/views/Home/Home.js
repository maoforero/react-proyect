import React from 'react'
import Footer from '../../components/Footer/Footer'
import ItemListcontainer from '../../components/ItemListContainer/ItemListcontainer'
import MainBanner from '../../components/MainBanner/MainBanner'
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {
    return (
        <>
            <MainBanner/>
            <SearchBar/>
            <Footer/>
        </>
    )
}

export default Home

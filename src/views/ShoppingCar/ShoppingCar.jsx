import React from 'react'
import { useLocation } from 'react-router-dom'
import CarItem from '../../components/CarItem/CarItem'
import Footer from '../../components/Footer/Footer'


const ShoppingCar = () => {

    const location = useLocation();
    const { item } = location.state;

    console.log(item)

    // const [cartItem, setCartItem] = useState([]);

    // const addItem = (item) => {
    //     const exist = cartItem.find(show => show.id === item.id);
    //     if(exist){
    //         setCartItem(cartItem.map(show => show.id === item.id ?
    //             {
    //                 ...exist, qty: exist.qty + 1 } : show
    //             )
    //         );
    //     } else {
    //         setCartItem([...cartItem, {...item, qty: 1}])
    //     }
    // }

    return (
        <div>
            <CarItem className='carItem--Link'/>
            <Footer/>
        </div> 
    )
}



export default ShoppingCar

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'

//React Router Dom
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


//Views

import Home from './views/Home/Home';
import Movies from './views/Movies/Movies';
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Error from './views/Error/Error';
import ItemDetail from "./components/ItemDetails/ItemDetails";
import Theater from "./views/Theater/Theater";
import ShoppingCar from "./views/ShoppingCar/ShoppingCar";


class App extends React.Component {
  render() {

    return(
      <Router>
        <div>
        <NavBar title="TicketMaster"/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/teatro" element={<Theater/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route exact path="/itemdetail/:id" element={<ItemDetail/>} />
            <Route path="*" element={<Error/>} />
            <Route path='/shoppingcar' element={<ShoppingCar/>}/>
          </Routes>
        </div>  
      </Router>
    );
  };
};

export default App;
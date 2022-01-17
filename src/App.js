import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'

//React Router Dom
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


//Views

import Home from './views/Home/Home';
import Movies from './views/Movies/Movies';
import Error from './views/Error/Error';
import ItemDetail from "./components/ItemDetails/ItemDetails";
import Theater from "./views/Theater/Theater";
import CarItem from "./components/CarItem/CarItem";


class App extends React.Component {
  render() {

    return(
      <Router>
        <div>
        <NavBar title="TicketMaster"/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies info={"movie"}/>}/>
            <Route path="/teatro" element={<Theater info={"theater"}/>}/>
            <Route exact path="/itemdetail/:id" element={<ItemDetail/>} />
            <Route path="*" element={<Error/>} />
            <Route path='/shoppingcar' element={<CarItem/>}/>
          </Routes>
        </div>  
      </Router>
    );
  };
};

export default App;
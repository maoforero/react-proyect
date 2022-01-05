import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

//React Router Dom
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


//Views

import Home from './views/Home/Home';
import Movies from './views/Movies/Movies';
import Series from "./views/Series/Series";
import Contact from './views/Contact/Contact';
import About from './views/About/About';
import Error from './views/Error/Error';
import ItemDetails from "./components/ItemDetail/ItemDetails";


class App extends React.Component {
  render() {

    return(
      <Router>
        <div>
        <NavBar title="TicketMaster"/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route exact path="/itemdetail/:idItem" element={<ItemDetails/>} />
            <Route path="*" element={<Error/>} />
          </Routes>
        </div>  
      </Router>
    );
  };
};

export default App;
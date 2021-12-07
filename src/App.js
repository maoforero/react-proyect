import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';
import './App.css'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar title="TicketMaster"/>
        <ItemListContainer  />
        <ItemDetailContainer />
      </div>
    );
  };
};

export default App;
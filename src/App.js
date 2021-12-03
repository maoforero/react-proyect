import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListcontainer';

import './App.css'


class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar title="TicketMaster"/>
        <ItemListContainer  />
      </div>
    );
  };
};

export default App;
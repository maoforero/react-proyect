import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css'


class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar />
        <ItemListContainer title="Finca raiz"/>
      </div>
    );
  };
};

export default App;
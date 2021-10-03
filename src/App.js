import './App.css';
import marked from "marked";
import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import {ReactComponent as WebLogo} from "./assets/icon.svg"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {Header()}
        </header>
        <span style={{top: "60px", position: "absolute"}}>
        <Switch>
          <Route exact path={"/"}>
            {Home()}
          </Route>
        </Switch>
        </span>
      </div>
    )
  }
}

function Home() {
  return(
    <div className="Page">
      
    </div>
  )
}

function Header() {
  return (
    <div className="Header">
      <WebLogo id="WebLogo" />
    </div>
  )
}

export default App;

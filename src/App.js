import './App.css';
import marked from "marked";
import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import { ReactComponent as WebLogo } from "./assets/icon.svg"
import homemd from './docs/home.md'

function App() {
  return (
    <div className="App">
      <header>
        {Header()}
      </header>
      <span style={{ top: "60px", position: "absolute" }}>
        <Switch>
          <Route exact path={"/"}>
            {Home()}
          </Route>
        </Switch>
      </span>
      <footer>
        {Footer()}
      </footer>
    </div>
  )
}

function Home() {
  const [markdown, setMarked] = useState("");

  useEffect(() => {
    fetch(homemd)
      .then(response => {
        return response.text()
      })
      .then(text => {
        //console.log(text)
        setMarked(marked(text))
      })
  });

  return (
    <div className="Page">
      <section>
        <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
      </section>
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

function Footer() {
  return(
    <div className="Footer">
      © 2021 leafstudiosDot
    </div>
  )
}
export default App;

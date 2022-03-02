import './App.css';
import marked from "marked";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ReactComponent as WebLogo } from "./assets/icon.svg"
import homemd from './docs/home.md'

function App() {
  return (
    <div className="App">
      <header>
        {Header()}
      </header>
      <span style={{ top: "60px", position: "absolute" }}>
        <Router>
          <Switch>
            <Route exact path={"/"}>
              {Home()}
            </Route>
          </Switch>
        </Router>
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
      <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
    </div>
  )
}

function Header() {
  return (
    <div className="Header">
      <WebLogo id="WebLogo" />
      <div className="HeaderMenu">
        <div className="HeaderMenuButtons"
          style={{
            borderBottom: "solid 2px #ffffff"
          }}>
          Home
        </div>
        <div className="HeaderMenuButtons">
          Docs
        </div>
        <a href="https://blog.hodots.com/#/changelog" target="_blank noreferrer">
          <div className="HeaderMenuButtons">
            Changelog
          </div>
        </a>
        <a href="https://github.com/leafstudiosDot/hodots-docs" target="_blank noreferrer">
          <div className="HeaderMenuButtons">
            GitHub
          </div>
        </a>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="Footer">
      © 2021 leafstudiosDot
    </div>
  )
}
export default App;

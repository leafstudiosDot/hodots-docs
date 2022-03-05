import './App.css';
import marked from "marked";
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ReactComponent as WebLogo } from "./assets/icon.svg"
import homemd from './docs/home.md'
import docs from './docs.js';

function App() {
  return (
    <div className="App">
        <Router>
          <header>
            {Header()}
          </header>
          <span style={{ top: "60px", position: "absolute" }}>
          <Switch>
            <Route exact path={"/"}>
              {Home()}
            </Route>
            <Route path={"/docs"}>
              {Docs()}
            </Route>
          </Switch>
          </span>
        </Router>
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

function Docs() {
  return (
    docs()
  )
}

function Header() {
  return (
    <div className="Header">
      <WebLogo id="WebLogo" />
      <div className="HeaderMenu">
        <Link to={"/"}><div className="HeaderMenuButtons">
          Home
        </div></Link>
        <Link to={"/docs"}><div className="HeaderMenuButtons">
          Docs
        </div></Link>
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

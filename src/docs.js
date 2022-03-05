import marked from "marked";
import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import SideBar from './sidebar.js';
import mainmd from './docs/docs.md'
import termsmd from './docs/terms.md'

function ToS() {
    const [markdown, setMarked] = useState("");

    useEffect(() => {
        fetch(termsmd)
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

export default function DocsMain() {
    const [markdown, setMarked] = useState("");

    useEffect(() => {
        fetch(mainmd)
            .then(response => {
                return response.text()
            })
            .then(text => {
                //console.log(text)
                setMarked(marked(text))
            })
    });
    return (
        <div>
            {SideBar()}
            <Switch>
                <Route exact path={"/docs"}>
                    <div className="Page">
                        <article dangerouslySetInnerHTML={{ __html: markdown }}></article>
                    </div>
                </Route>
                <Route exact path={"/docs/terms"}>
                    {ToS()}
                </Route>
            </Switch>
        </div>
    )
}
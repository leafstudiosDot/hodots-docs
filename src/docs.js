import marked from "marked";
import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
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
    return (
        <div>
            <Switch>
                <Route exact path={"/docs"}>
                    
                </Route>
                <Route exact path={"/docs/terms"}>
                    {ToS()}
                </Route>
            </Switch>
        </div>
    )
}
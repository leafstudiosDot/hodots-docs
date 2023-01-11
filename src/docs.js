import marked from "marked";
import React, { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import SideBar from './sidebar.js';
import mainmd from './docs/docs.md'
import termsmd from './docs/terms.md'
import hodotsAPImd from './docs/hodotsAPI.md'
import postReferMD from './docs/posts/index.md'

function ImportMD(markdownimp) {
    const [markdown, setMarked] = useState("");

    useEffect(() => {
        fetch(markdownimp)
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
                    {ImportMD(termsmd)}
                </Route>
                <Route exact path={"/docs/API"}>
                    {ImportMD(hodotsAPImd)}
                </Route>
                <Route exact path={"/docs/guide/post"}>
                    {ImportMD(postReferMD)}
                </Route>
            </Switch>
        </div>
    )
}
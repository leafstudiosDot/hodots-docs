import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function SideBar() {
    let [windowHeight, setWindowHeight] = useState(window.innerHeight)
    let [sideBarOpen, setsideBarOpen] = useState(false);
    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <span>
            <div className="sidebarOpener" onClick={() => setsideBarOpen(true)} style={{ display: sideBarOpen ? 'none' : 'block' }}>&gt;</div>
            <div className="sidebar" style={{ height: windowHeight - 82, display: sideBarOpen ? 'block' : 'none' }}>
                <div id="sidebar-close" onClick={() => setsideBarOpen(false)}>X</div>
                <ul id="sidebar-menu-cont">
                    <li id="sidebar-menu" onClick={() => {setsideBarOpen(false);}}>Search</li>
                    <Link to={"/docs"}><li id="sidebar-menu" onClick={() => setsideBarOpen(false)}>Home</li></Link>
                    <Link to={"/docs/API"}><li id="sidebar-menu" onClick={() => setsideBarOpen(false)}>hodots. API</li></Link>
                </ul>
                <ul id="sidebar-menu-cont">
                    <div id="sidebar-menu-title">Legal</div>
                    <Link to={"/docs/terms"}><li id="sidebar-menu" onClick={() => setsideBarOpen(false)}>Terms</li></Link>
                </ul>
                <ul id="sidebar-menu-cont">
                    <div id="sidebar-menu-title">Guide</div>
                    <Link to={"/docs/guide/post"}><li id="sidebar-menu" onClick={() => setsideBarOpen(false)}>Post</li></Link>
                </ul>
            </div>
        </span>
    )
}
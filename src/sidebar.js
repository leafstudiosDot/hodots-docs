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
            <div className="sidebarOpener" onClick={() => setsideBarOpen(true)} style={{display: sideBarOpen ? 'none' : 'block'}}>&gt;</div>
            <div className="sidebar" style={{ height: windowHeight - 82, display: sideBarOpen ? 'block' : 'none' }}>
                <div id="sidebar-close" onClick={() => setsideBarOpen(false)}>X</div>
                <ul id="sidebar-menu">Search</ul>
            </div>
        </span>
    )
}
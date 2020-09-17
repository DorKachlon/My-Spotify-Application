import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "../styles/navBar.css";

export default function NavBar() {
    const [value, setValue] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    window.addEventListener("scroll", changeBackground);
    return (
        <nav>
            <Tabs
                style={{ justifyContent: "space-around", color: "white" }}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                className={scrolling ? "scrollingBacground" : "nothing"}
            >
                
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Songs" component={Link} to="/songs" />
                <Tab label="Albums" component={Link} to="/albums" />
                <Tab label="Playlists" component={Link} to="/playlists" />
            </Tabs>
        </nav>
    );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "../styles/navBar.css";

export default function NavBar() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <nav>
            <Tabs
                style={{ justifyContent: "space-around" ,color:"white"}}
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
            >
                <Tab label="Home" component={Link} to="/" />
                <Tab label="Songs" component={Link} to="/songs" />
                <Tab label="Albums" component={Link} to="/albums" />
                <Tab label="Playlist" component={Link} to="/playlist" />
            </Tabs>
        </nav>
    );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "../../styles/navBar.css";
import SearchBar from "./SearchBar";

import { makeStyles } from "@material-ui/core/styles";
import Cookies from "js-cookie";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    logout: {
        marginBottom: "0px",
        background: "linear-gradient(45deg, #28B869 30%, #00E676 90%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
}));

export default function WideNav({login,setLogin}) {
    let history = useHistory();
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [scrolling, setScrolling] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const changeBackground = () => {
        if (window.scrollY >= 40) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    const logoutClickHandler = () => {
        Cookies.remove("token");
        setLogin(false);
        history.push("/");
    };
    window.addEventListener("scroll", changeBackground);

    return (
        <nav>
            {login ? (
                <Tabs
                    style={{
                        justifyContent: "space-around",
                        color: "white",
                    }}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    className={scrolling ? "scrollingBacground" : "nothing"}
                >
                    <Tab label="Home" component={Link} to="/home" />
                    <Tab label="Songs" component={Link} to="/songs" />
                    <Tab label="Albums" component={Link} to="/albums" />
                    <Tab label="Playlists" component={Link} to="/playlists" />
                    <div className="searchBar">
                        <SearchBar />
                    </div>
                    <Button className={classes.logout} onClick={logoutClickHandler}>
                        Log Out
                    </Button>
                </Tabs>
            ) : (
                <Tabs
                    style={{
                        justifyContent: "space-around",
                        color: "white",
                    }}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    className={scrolling ? "scrollingBacground" : "nothing"}
                >
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="log in" component={Link} to="/login" />
                    <Tab label="Sign up" component={Link} to="/register" />
                </Tabs>
            )}
        </nav>
    );
}

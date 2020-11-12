import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SearchBar from "./SearchBarV2";
import { makeStyles } from "@material-ui/core/styles";
import Cookies from "js-cookie";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import network from "../../network/network";
import "../../styles/navBar.css";

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

export default function WideNav({ login, setLogin }) {
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

  const logoutClickHandler = async () => {
    try {
      await network.post("/api/auth/logout", {
        token: Cookies.get("refreshToken"),
      });
      Cookies.remove("refreshToken");
      Cookies.remove("accessToken");
      Cookies.remove("name");
      Cookies.remove("email");
      setLogin(false);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav>
      {login ? (
        <nav>
          <NavLink to="/home" exact>
            <img
              style={{
                position: "fixed",
                width: "4em",
                margin: "12px",
                zIndex: "2",
              }}
              src="https://i.ibb.co/jgT3n13/dk-tube3.png"
              alt="dk-tube2"
              border="0"
            />
          </NavLink>
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
            <Button className={classes.logout} onClick={logoutClickHandler}>
              Log Out
            </Button>
            <div className="searchBar">
              <SearchBar />
            </div>
          </Tabs>
        </nav>
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

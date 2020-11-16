import React, { useState, useEffect } from "react";
import "./App.css";

import Home from "./pages/Home-Page/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Guest from "./components/Guest";
import NavBar from "./components/navBar/NavBar";
import Songs from "./components/Songs";
import Albums from "./components/Albums";
import Playlist from "./components/Playlist";
import SingleSong from "./pages/singleSong-Page/SingleSong";
import SingleArtist from "./components/SingleArtist";
import SinglePlaylist from "./components/SinglePlaylist";
import SingleAlbum from "./components/SingleAlbum";
import ErrorPage from "./components/ErrorPage";
import SearchPage from "./components/SearchPage";
import ValidatingMail from "./components/ValidatingMail";
import ProtectedRoute from "./components/protectedRoute";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, pink, grey } from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import network from "./network/network";
import Cookies from "js-cookie";
import CircularProgress from "@material-ui/core/CircularProgress";

const myTheme = createMuiTheme({
  palette: {
    secondary: green,
    primary: pink,
    info: grey,
  },
});

function App() {
  const [login, setLogin] = useState(false);
  const [smallScreen, setSmallScreen] = useState(window.innerWidth < 1100 ? true : false);
  const [loading, setLoading] = useState(true);

  // console.log(login);
  useEffect(() => {
    // auth
    (async () => {
      if (Cookies.get("accessToken")) {
        try {
          const { data } = await network.get("/api/auth/validateToken");
          if (data.valid) setLogin(true);
          setLoading(false);
        } catch (e) {
          console.error(e);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    })();
  }, []);

  const displayWindowSize = () => {
    if (window.innerWidth < 1100) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };
  window.addEventListener("resize", displayWindowSize);

  return (
    <div className="body">
      <ThemeProvider theme={myTheme}>
        <Router>
          {!loading ? (
            <div className="App">
              <NavBar login={login} setLogin={setLogin} smallScreen={smallScreen} />
              <div className="height-for-nav"></div>
              <Switch>
                <ProtectedRoute exact path="/home">
                  <Home smallScreen={smallScreen} />
                </ProtectedRoute>
                <Route exact path="/" component={Guest} />
                <Route exact path="/login">
                  <Login setLogin={setLogin} />
                </Route>
                <Route exact path="/register">
                  <Register setLogin={setLogin} />
                </Route>
                <Route exact path="/auth">
                  <ValidatingMail />
                </Route>
                <ProtectedRoute exact path="/songs" component={Songs} />
                <ProtectedRoute exact path="/albums" component={Albums} />
                <ProtectedRoute exact path="/playlists" component={Playlist} />
                <ProtectedRoute path="/songs/:id">
                  <SingleSong />
                </ProtectedRoute>
                <ProtectedRoute path="/artists/:id" component={SingleArtist} />
                <ProtectedRoute path="/playlists/:id" component={SinglePlaylist} />
                <ProtectedRoute path="/albums/:id" component={SingleAlbum} />
                <ProtectedRoute path="/search" component={SearchPage} />
                <Route component={ErrorPage} />
              </Switch>
            </div>
          ) : (
            <div
              style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress color="secondary" />
            </div>
          )}
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

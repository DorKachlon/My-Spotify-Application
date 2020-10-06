import React, { useState } from "react";
import "./App.css";

import Home from "./components/home-Page/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Guest from "./components/Guest";
import NavBar from "./components/navBar/NavBar";
import Songs from "./components/Songs";
import Albums from "./components/Albums";
import Playlist from "./components/Playlist";
import SingleSong from "./components/singleSong-Page/SingleSong";
import SingleArtist from "./components/SingleArtist";
import SinglePlaylist from "./components/SinglePlaylist";
import SingleAlbum from "./components/SingleAlbum";
import ErrorPage from "./components/ErrorPage";
import SearchPage from "./components/SearchPage";
import ProtectedRoute from "./components/protectedRoute";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, pink, grey } from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from "js-cookie";

const myTheme = createMuiTheme({
    palette: {
        secondary: green,
        primary: pink,
        info: grey,
    },
});

function App() {
    const [autoPlay, setAutoPlay] = useState(
        !document.cookie.includes("autoPlay=false")
    );
    const [login, setLogin] = useState(Cookies.get("token"));
    return (
        <div className="body">
            <ThemeProvider theme={myTheme}>
                <Router>
                    <div className="App">
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
                        <NavBar login={login} setLogin={setLogin} />
                        <div className="height-for-nav"></div>
                        <Switch>
                            <ProtectedRoute
                                exact
                                path="/home"
                                component={Home}
                            />
                            <Route exact path="/" component={Guest} />
                            <Route exact path="/login">
                                <Login setLogin={setLogin} />
                            </Route>
                            <Route exact path="/register">
                                <Register setLogin={setLogin} />
                            </Route>
                            <ProtectedRoute
                                exact
                                path="/songs"
                                component={Songs}
                            />
                            <ProtectedRoute
                                exact
                                path="/albums"
                                component={Albums}
                            />
                            <ProtectedRoute
                                exact
                                path="/playlists"
                                component={Playlist}
                            />
                            <ProtectedRoute path="/songs/:id">
                                <SingleSong
                                    autoPlay={autoPlay}
                                    setAutoPlay={setAutoPlay}
                                />
                            </ProtectedRoute>
                            <ProtectedRoute
                                path="/artists/:id"
                                component={SingleArtist}
                            />
                            <ProtectedRoute
                                path="/playlists/:id"
                                component={SinglePlaylist}
                            />
                            <ProtectedRoute
                                path="/albums/:id"
                                component={SingleAlbum}
                            />
                            <ProtectedRoute
                                path="/search"
                                component={SearchPage}
                            />
                            <Route component={ErrorPage} />
                        </Switch>
                    </div>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;

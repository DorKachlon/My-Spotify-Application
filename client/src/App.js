import React, { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Songs from "./components/Songs";
import Albums from "./components/Albums";
import Playlist from "./components/Playlist";
import SingleSong from "./components/SingleSong";
import SingleArtist from "./components/SingleArtist";
import SinglePlaylist from "./components/SinglePlaylist";
import SingleAlbum from "./components/SingleAlbum";
import ErrorPage from "./components/ErrorPage";
import SearchPage from "./components/SearchPage";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, pink } from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const myTheme = createMuiTheme({
    palette: {
        secondary: green,
        primary: pink,
    },
});

function App() {
    const [autoPlay, setAutoPlay] = useState(
        !document.cookie.includes("autoPlay=false")
    );
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
                        <NavBar />

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/songs" component={Songs} />
                            <Route path="/albums" component={Albums} />
                            <Route path="/playlists" component={Playlist} />
                            <Route path="/song/:id">
                                <SingleSong
                                    autoPlay={autoPlay}
                                    setAutoPlay={setAutoPlay}
                                />
                            </Route>
                            <Route
                                path="/artist/:id"
                                component={SingleArtist}
                            />
                            <Route
                                path="/playlist/:id"
                                component={SinglePlaylist}
                            />
                            <Route path="/album/:id" component={SingleAlbum} />
                            <Route path="/search" component={SearchPage} />
                            <Route path="/404" component={ErrorPage} />
                        </Switch>
                    </div>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;

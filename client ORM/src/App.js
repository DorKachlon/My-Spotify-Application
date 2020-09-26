import React, { useState } from "react";
import "./App.css";

import Home from "./components/home-Page/Home";
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
                            <Route exact path="/songs" component={Songs} />
                            <Route exact path="/albums" component={Albums} />
                            <Route exact path="/playlists" component={Playlist} />
                            <Route path="/songs/:id">
                                <SingleSong
                                    autoPlay={autoPlay}
                                    setAutoPlay={setAutoPlay}
                                />
                            </Route>
                            <Route
                                path="/artists/:id"
                                component={SingleArtist}
                            />
                            <Route
                                path="/playlists/:id"
                                component={SinglePlaylist}
                            />
                            <Route path="/albums/:id" component={SingleAlbum} />
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

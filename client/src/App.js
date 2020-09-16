import React from "react";
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

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const myTheme = createMuiTheme({
    palette: {
        secondary: green,
    },
});

function App() {
    return (
        <div className="body">
            <ThemeProvider theme={myTheme}>
                <Router>
                    <div className="App">
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/songs" component={Songs} />
                            <Route path="/albums" component={Albums} />
                            <Route path="/playlists" component={Playlist} />
                            <Route path="/song/:id" component={SingleSong} />
                            <Route path="/artist/:id" component={SingleArtist} />
                            <Route path="/playlist/:id" component={SinglePlaylist} />
                            <Route path="/album/:id" component={SingleAlbum} />
                        </Switch>
                    </div>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;

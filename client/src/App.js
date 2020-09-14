import React from "react";
import "./App.css";
import Albums from "./components/Albums";
import NavBar from "./components/NavBar";
import Songs from "./components/Songs";
import Playlist from "./components/Playlist";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/songs" component={Songs} />
                    <Route path="/albums" component={Albums} />
                    <Route path="/playlist" component={Playlist} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

import React from "react";
import "./App.css";
import Albums from "./components/Albums";
import NavBar from "./components/NavBar";
import Songs from "./components/Songs";
import Playlist from "./components/Playlist";
import Home from "./components/Home";
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
                            <Route path="/playlist" component={Playlist} />
                        </Switch>
                    </div>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;

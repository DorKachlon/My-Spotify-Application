import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>NavBar</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/songs">Songs</Link>
                <Link to="/albums">Albums</Link>
                <Link to="/playlist">Playlist</Link>
            </ul>
        </nav>
    );
}

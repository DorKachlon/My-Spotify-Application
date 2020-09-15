import React from "react";
import "../styles/TopSongs.css";

export default function TopSongs({ elements }) {
    return (
        <div className="singleCarousel">
            {elements.map((elem, i) => {
                return (
                    <div className="containerSingleItem" key={i}>
                        <div className="containerImage">
                            <img
                                className="image"
                                src={elem.cover_img}
                                alt=""
                            ></img>
                        </div>
                        <p className="songName">{elem.name}</p>
                        <p className="artistName">
                            {elem.artist_name} • {elem.counter_player} Plays
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

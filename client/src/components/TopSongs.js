import React from "react";
import "../styles/TopSongs.css";

export default function TopSongs({ elements, product }) {
    return (
        <div className="singleCarousel">
            {elements.map((elem, i) => {
                return (
                    <div className="containerSingleItem" key={i}>
                        <div className="containerImage">
                            <img
                                style={
                                    product === "artists"
                                        ? { borderRadius: "50%" }
                                        : {}
                                }
                                className="image"
                                src={elem.cover_img}
                                alt=""
                            ></img>
                        </div>
                        <p className="songName">{elem.name}</p>
                        <p className="artistName">
                            {product === "albums" && elem.artist_name + " • "}
                            {product === "songs" && elem.artist_name + " • "}
                            {product === "artists"
                                ? elem.counter_subscribes
                                : elem.counter_player}{" "}
                            {product === "artists" ? "subscribes" : "Plays"}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

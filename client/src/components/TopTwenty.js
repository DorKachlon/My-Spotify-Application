import React from "react";
import { Link } from "react-router-dom";
import "../styles/TopTwenty.css";

export default function TopTwenty({ elements, product, topSongs }) {
    return (
        <div className="singleCarousel">
            {elements.map((elem, i) => {
                const id = `${product}_id`;
                const link = `/${product}/${elem[id]}`;
                return (
                    <Link
                        to={
                            topSongs !== null
                                ? {
                                      pathname: link,
                                      state: { obj: elem, topSongs: topSongs },
                                  }
                                : { pathname: link, state: { obj: elem } }
                        }
                        key={i}
                    >
                        <div className="containerSingleItem">
                            <div className="containerImage" onClick={() => {}}>
                                <img
                                    style={
                                        product === "artist"
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
                                {product === "album" &&
                                    elem.artist_name + " • "}
                                {product === "song" && elem.artist_name + " • "}
                                {product === "artist"
                                    ? elem.counter_subscribes
                                    : elem.counter_player}{" "}
                                {product === "artist" ? "subscribes" : "Plays"}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

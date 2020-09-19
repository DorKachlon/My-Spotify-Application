import React from "react";
import { Link } from "react-router-dom";
import "../styles/TopTwenty.css";

export default function TopTwenty({ elements, product }) {
    return (
        <div className="singleCarousel">
            {elements.map((elem, i) => {
                const id = `${product}_id`;
                let link;
                if (product === "song") {
                    link = `/song/${elem[id]}?topSongs=1`;
                } else {
                    link = `/${product}/${elem[id]}`;
                }
                return (
                    <Link to={link} key={i}>
                        <div className="containerSingleItem">
                            <div className="containerImage" >
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
                            <p
                                className="ProductName"
                                style={
                                    product === "artist"
                                        ? { textAlign: "center" }
                                        : {}
                                }
                            >
                                {elem.name}{" "}
                            </p>
                            <p className="artistName" style={
                                    product === "artist"
                                        ? { textAlign: "center" }
                                        : {}
                                }>
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

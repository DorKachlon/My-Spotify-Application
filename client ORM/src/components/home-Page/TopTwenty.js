import React from "react";
import { Link } from "react-router-dom";
import "../../styles/TopTwenty.css";

export default function TopTwenty({ elements, product }) {
    return (
        <div className="singleCarousel">
            {elements.map((elem, i) => {
                let link;
                switch (product) {
                    case "Song":{
                            link=`/songs/${elem.Song.id}?topSongs=1`
                        break;
                    }
                    case "Album":{
                        link=`/albums/${elem.Album.id}`
                        break;
                    }
                    case "Artist":{
                        link=`/artists/${elem.Artist.id}`
                        break;
                    }
                    case "Playlist":{
                        link=`/playlists/${elem.Playlist.id}`
                        break;
                    }
                    default:
                        break;
                }
                return (
                    <Link to={link} key={i}>
                        <div className="containerSingleItem">
                            <div className="containerImage" >
                                <img
                                    style={
                                        product === "Artist"
                                            ? { borderRadius: "50%" }
                                            : {}
                                    }
                                    className="image"
                                    src={product ==="Song"?elem.Song.Album.coverImg:elem[product].coverImg}
                                    alt=""
                                ></img>
                            </div>
                            <p
                                className="ProductName"
                                style={
                                    product === "Artist"
                                        ? { textAlign: "center" }
                                        : {}
                                }
                            >
                                {elem[product].name}{" "}
                            </p>
                            <p className="artistName" style={
                                    product === "Artist"
                                        ? { textAlign: "center" }
                                        : {}
                                }>
                                {product === "Album" &&
                                    elem.Album.Artist.name + " • "}
                                {product === "Song" && elem.Song.Artist.name + " • "}
                                {product === "Artist"
                                    ? elem.counterSubscribes
                                    : elem.counterPlayer}{" "}
                                {product === "Artist" ? "subscribes" : "plays"}
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";

export default function DataOfList({
    search,
    product,
    dataOFProduct,
    autoPlay,
    setAutoPlay,
}) {
    const handleChange = (event) => {
        document.cookie = `autoPlay=${event.target.checked};path=/`;
        setAutoPlay(event.target.checked);
    };
    return (
        <div className="dataPlaylist">
            <div>
                <div className="name-of-album-playlist">
                    <div>
                        {search.includes("topSongs")
                            ? "The top 20 songs"
                            : `${dataOFProduct.name} `}
                    </div>

                    {!search.includes("topSongs") && (
                        <span className="album-playlist">
                            &nbsp; • {product}
                        </span>
                    )}
                </div>
                {product === "album" && (
                    <Link
                        to={`/artist/${dataOFProduct.artist_id}`}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="artist-name">
                            <img
                                className="artist-cover-img"
                                src={dataOFProduct.artist_cover_img}
                                alt=""
                            />
                            {dataOFProduct.artist_name}
                        </div>
                    </Link>
                )}
            </div>
            <div className="autoPlay">
                <div>auto play:</div>
                <Switch
                    checked={autoPlay}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{
                        "aria-label": "primary checkbox",
                    }}
                />
            </div>
        </div>
    );
}

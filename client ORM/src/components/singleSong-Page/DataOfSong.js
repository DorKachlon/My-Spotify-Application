import React, { useState } from "react";
import "../../styles/DataOfSong.css";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

export default function DataOfSong({ songDetails }) {
    const [like, setLike] = useState(false);
    const [sentence, setSentence] = useState(false);
    function clickHandler() {
        setLike(!like);
        if (!like === true) {
            setSentence(true);
            setTimeout(() => {
                setSentence(false);
            }, 3000);
        }
    }
    return (
        <>
            <div className="dataSong">
                <div className="song-nameANDdate">
                    <div className="song-name-ditails">{songDetails.name}</div>
                    <div className="song-date-ditails">
                        {songDetails.Album.releasedAt.slice(0, 10)}
                    </div>
                </div>
                <div className="iconButton">
                    {sentence ? "Added to favorites" : ""}
                    <IconButton onClick={clickHandler} color="primary">
                        {like ? (
                            <FavoriteIcon color="primary" />
                        ) : (
                            <FavoriteBorderIcon color="primary" />
                        )}
                    </IconButton>
                </div>
            </div>
            <div className="artistAndAlbum">
                <Link to={`/artists/${songDetails.artistId}`}>
                    <div className="song-artist-ditails">
                        <img
                            className="song-artist-img"
                            src={songDetails.Artist.coverImg}
                            alt=""
                        />
                        <div className="song-artist-name">
                            {songDetails.Artist.name}
                            <p> &nbsp;• Artist</p>
                        </div>
                    </div>
                </Link>
                <Link to={`/albums/${songDetails.albumId}`}>
                    <div className="song-album-ditails">
                        <img
                            className="song-album-img"
                            src={songDetails.Album.coverImg}
                            alt=""
                        />
                        <div className="song-album-name">
                            {songDetails.Album.name} <p>&nbsp;• Album</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

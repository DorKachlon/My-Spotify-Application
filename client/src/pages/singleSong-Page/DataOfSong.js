import React, { useState, useEffect } from "react";
import "./DataOfSong.css";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";
import network from "../../network/network";

export default function DataOfSong({ songDetails }) {
  const [like, setLike] = useState(false);
  const [sentence, setSentence] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log(loading);
  async function clickHandler() {
    if (like === false) {
      await network.post(`/api/users/like-song/${songDetails.id}`);
      setLike(true);
      setSentence(true);
      setTimeout(() => {
        setSentence(false);
      }, 3000);
    }
    if (like === true) {
      await network.delete(`/api/users/like-song/${songDetails.id}`);
      setLike(false);
    }
  }
  
  useEffect(() => {
    setLoading(true);
    setSentence(false);
  }, [songDetails]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await network.get(`/api/users/like-song/${songDetails.id}`);
        console.log(data);
        if (data.message === "like") setLike(true);
        else setLike(false);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [songDetails]);

  return (
    <>
      <div className="dataSong">
        <div className="song-nameANDdate">
          <div className="song-name-ditails">{songDetails.name}</div>
          <div className="song-date-ditails">{songDetails.Album.releasedAt.slice(0, 10)}</div>
        </div>
        <div className="iconButton">
          {sentence ? "Added to favorites" : ""}
          {!loading && (
            <IconButton onClick={clickHandler} color="primary">
              {like ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon color="primary" />}
            </IconButton>
          )}
        </div>
      </div>
      <div className="artistAndAlbum">
        <Link to={`/artists/${songDetails.artistId}`}>
          <div className="song-artist-ditails">
            <img className="song-artist-img" src={songDetails.Artist.coverImg} alt="" />
            <div className="song-artist-name">
              {songDetails.Artist.name}
              <p> &nbsp;• Artist</p>
            </div>
          </div>
        </Link>
        <Link to={`/albums/${songDetails.albumId}`}>
          <div className="song-album-ditails">
            <img className="song-album-img" src={songDetails.Album.coverImg} alt="" />
            <div className="song-album-name">
              {songDetails.Album.name} <p>&nbsp;• Album</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

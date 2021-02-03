import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import network from "../network/network";
import { arrayOfFiveForAlbums } from "../helpers";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";
import "../styles/SearchPage.css";
export default function SearchPage() {
  const url = useLocation();
  const query = new URLSearchParams(url.search);
  const params = query.get("params");
  const [songsPlaylistAlbumsArtists, setSongsPlaylistAlbumsArtists] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let arr = [];
        const { data: songsData } = await network.get(`/api/songs/search/${params}`);
        arr.push(songsData);
        const { data: playlistsData } = await network.get(`/api/playlists/search/${params}`);
        arr.push(playlistsData);
        const { data: albumsData } = await network.get(`/api/albums/search/${params}`);
        arr.push(albumsData);
        const { data: artistsData } = await network.get(`/api/artists/search/${params}`);
        arr.push(artistsData);
        setSongsPlaylistAlbumsArtists(arr);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [params]);

  return (
    <div className="container-search-page">
      {songsPlaylistAlbumsArtists.length === 4 && (
        <>
          <h1 className="title-search">
            Showing results for : <span className="title-search-input">{params}</span>
          </h1>

          <div>
            {songsPlaylistAlbumsArtists[0].length !== 0 && (
              <>
                <h2 className="topTitle">Songs :</h2>
                <Carousel //carousel for song
                  autoPlay={false}
                  navButtonsAlwaysVisible={true}
                >
                  {arrayOfFiveForAlbums(songsPlaylistAlbumsArtists[0]).map((array, i) => {
                    return (
                      <div className="singleCarousel" key={i}>
                        {array.map((elem, j) => {
                          const link = `/songs/${elem.id}?artists=${elem.artistId}`;
                          return (
                            <Link to={link} key={j}>
                              <div className="containerSingleItemArtist">
                                <div className="containerImage">
                                  <img
                                    className="single-artist-image"
                                    src={elem.Album.coverImg}
                                    alt=""
                                  ></img>
                                </div>
                                <p className="ProductName">{elem.name}</p>
                                <p className="year">{elem.Album.releasedAt.slice(0, 10)}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </Carousel>
              </>
            )}
            {songsPlaylistAlbumsArtists[1].length !== 0 && (
              <>
                <h2 className="topTitle">Playlist :</h2>
                <Carousel //carousel for Playlist
                  autoPlay={false}
                  navButtonsAlwaysVisible={true}
                >
                  {arrayOfFiveForAlbums(songsPlaylistAlbumsArtists[1]).map((array, i) => {
                    return (
                      <div className="singleCarousel" key={i}>
                        {array.map((elem, j) => {
                          const link = `/playlists/${elem.id}`
                          return (
                            <Link to={link} key={j}>
                              <div className="containerSingleItemArtist">
                                <div className="containerImage">
                                  <img
                                    className="single-artist-image"
                                    src={elem.coverImg}
                                    alt=""
                                  ></img>
                                </div>
                                <p className="ProductName">{elem.name}</p>
                                <p className="year">{elem.releasedAt.slice(0, 10)}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </Carousel>
              </>
            )}
            {songsPlaylistAlbumsArtists[2].length !== 0 && (
              <>
                <h2 className="topTitle">Albums :</h2>
                <Carousel //carousel for albums
                  autoPlay={false}
                  navButtonsAlwaysVisible={true}
                >
                  {arrayOfFiveForAlbums(songsPlaylistAlbumsArtists[2]).map((array, i) => {
                    return (
                      <div className="singleCarousel" key={i}>
                        {array.map((elem, j) => {
                          const link = `/albums/${elem.id}`;
                          return (
                            <Link to={link} key={j}>
                              <div className="containerSingleItemArtist">
                                <div className="containerImage">
                                  <img
                                    className="single-artist-image"
                                    src={elem.coverImg}
                                    alt=""
                                  ></img>
                                </div>
                                <p className="ProductName">{elem.name}</p>
                                <p className="year">{elem.releasedAt.slice(0, 10)}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </Carousel>
              </>
            )}
            {songsPlaylistAlbumsArtists[3].length !== 0 && (
              <>
                <h2 className="topTitle">Artists :</h2>
                <Carousel //carousel for albums
                  autoPlay={false}
                  navButtonsAlwaysVisible={true}
                >
                  {arrayOfFiveForAlbums(songsPlaylistAlbumsArtists[3]).map((array, i) => {
                    return (
                      <div className="singleCarousel" key={i}>
                        {array.map((elem, j) => {
                          const link = `/artists/${elem.id}`;
                          return (
                            <Link to={link} key={j}>
                              <div className="containerSingleItemArtist">
                                <div className="containerImage">
                                  <img
                                    className="single-artist-image"
                                    style={{ borderRadius: "50%" }}
                                    src={elem.coverImg}
                                    alt=""
                                  ></img>
                                </div>
                                <p className="ProductName" style={{ textAlign: "center" }}>
                                  {elem.name}
                                </p>
                                <p className="year" style={{ textAlign: "center" }}>
                                  {elem.releasedAt.slice(0, 10)}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </Carousel>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

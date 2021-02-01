import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import network from "../network/network";
import Swal from "sweetalert2";
import "../styles/SingleArtist.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { arrayOfFiveForAlbums } from "../helpers";
export default function SingleArtist() {
  const { pathname, search } = useLocation();
  const [subscribe, setSubscribe] = useState(true);
  const [artiatAndList, setArtiatAndList] = useState(); //[artist , songs , albums]
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function loadSongAndList() {
      try {
        let newArr = [];
        const { data } = await network.get(`/api${pathname}`);
        newArr.push(data);
        const { data: songs } = await network.get(`/api/artists/${pathname.split("/")[2]}/songs`);
        newArr.push(songs);
        const { data: albums } = await network.get(`/api/artists/${pathname.split("/")[2]}/albums`);
        newArr.push(albums);
        setArtiatAndList(newArr);
        const { data: ifSubscribe } = await network.get(`/api/users/subscribe/${newArr[0].id}`);
        if (ifSubscribe.message === "subscribed") setSubscribe(true);
        else setSubscribe(false);
        setLoading(false);
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${e.message}`,
        });
      }
    })();
  }, [pathname, search]);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await network.get(`/api/users/subscribe/${artiatAndList[0].id}`);
        if (data.message === "subscribed") setSubscribe(true);
        else setSubscribe(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  async function subscribeHandler() {
    if (subscribe === false) {
      await network.post(`/api/users/subscribe/${artiatAndList[0].id}`);
      setSubscribe(true);
    }
    if (subscribe === true) {
      await network.delete(`/api/users/subscribe/${artiatAndList[0].id}`);
      setSubscribe(false);
    }
  }
  return (
    <>
      {artiatAndList && (
        <>
          <div className="pickgradient">
            <img className="artistImg" src={artiatAndList[0].coverImg} alt="" />
          </div>
          <div className="ditailsArtist">
            <div className="ditailsArtist-name">{artiatAndList[0].name}</div>
            {!loading && (
              <Button
                variant={subscribe ? "outlined" : "contained"}
                color="primary"
                onClick={subscribeHandler}
              >
                {subscribe ? "SUBSCRIBED" : "SUBSCRIBE"}
              </Button>
            )}
          </div>
          <h2 className="single-artist-top-title">songs</h2>
          {artiatAndList[2].length !== 0 && (
            <Carousel //carousel for song
              autoPlay={false}
              navButtonsAlwaysVisible={true}
            >
              {arrayOfFiveForAlbums(artiatAndList[1]).map((array, i) => {
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
          )}
          <h2 className="single-artist-top-title">Albums</h2>
          {artiatAndList[2].length !== 0 && (
            <Carousel //carousel for albums
              autoPlay={false}
              navButtonsAlwaysVisible={true}
            >
              {arrayOfFiveForAlbums(artiatAndList[2]).map((array, i) => {
                return (
                  <div className="singleCarousel" key={i}>
                    {array.map((elem, j) => {
                      const link = `/albums/${elem.id}`;
                      return (
                        <Link to={link} key={j}>
                          <div className="containerSingleItemArtist">
                            <div className="containerImage">
                              <img className="single-artist-image" src={elem.coverImg} alt=""></img>
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
          )}
        </>
      )}
    </>
  );
}

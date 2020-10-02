import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import network from "../../network/network"
import "../../styles/SingleSong.css";
import { makeStyles } from "@material-ui/core/styles";

import MyList from "../MyList";
import DataOfSong from "./DataOfSong";
import DataOfList from "./DataOfList";

const useStyles = makeStyles(() => ({
    rootList: {
        width: "40vw",
        backgroundColor: "transparent",
        borderRadius: "5px",
        height: "auto",
        overflow: "auto",
        "@media (max-width:1100px)": {
            width: "97vw",
            overflow: "visible",
        },
    },
}));

export default function SingleSong({ autoPlay, setAutoPlay }) {
    const { pathname, search } = useLocation();
    const [songAndList, setSongAndList] = useState();
    const product = search.split("=")[0].slice(1);
    const classes = useStyles();
    useEffect(() => {
        (async function loadSongAndList() {
            try {
                let newArr = [];
                const { data } = await network.get(`/api${pathname}`);
                newArr.push(data);
                if (search.includes("topSongs")) {
                    const {data: dataList} = await network.get(
                        "/api/interactions/top_songs"
                    );
                    newArr.push(dataList);
                } else {
                    const {data: dataList} = await network.get(
                        `/api/${product}/${search.split("=")[1]}/songs`
                    );
                    newArr.push(dataList);
                }
                if (["albums", "playlists", "artists"].includes(product)) {
                    const {data: dataProduct} = await network.get(
                        `/api/${product}/${search.split("=")[1]}`
                    );
                    newArr.push(dataProduct);
                }
                console.log(newArr);
                setSongAndList(newArr);
            } catch (e) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${e.message}`,
                });
            }
        })();
    }, [pathname, search, product]);

    async function endSongFunc() {
        let currentIndex = songAndList[1].findIndex(
            (obj) => obj.Song.id === songAndList[0].id
        );
        if (songAndList[1].length === currentIndex + 1) {
            currentIndex = -1;
        }
        debugger
        const songId = songAndList[1][currentIndex + 1].Song.id;
        let newArr = [...songAndList];
        const { data } = await network.get(`/api/songs/${songId}`);
        newArr[0] = data;
        window.history.replaceState(
            null,
            "New Page Title",
            `/song/${songId}${search}`
        );
        setSongAndList(newArr);
    }
    return (
        <>
            {songAndList && (
                <div className="containerSingleSong">
                    <div className="iFrameAndDataSong">
                        <YouTube
                            className="YoutubeVid"
                            videoId={
                                songAndList[0].youtubeLink
                                    .split("watch?v=")[1]
                                    .split("&list")[0]
                            }
                            onEnd={endSongFunc}
                            opts={
                                autoPlay
                                    ? {
                                          alignText: "center",
                                          playerVars: {
                                              autoplay: 1,
                                          },
                                      }
                                    : {
                                          alignText: "center",
                                          playerVars: {
                                              autoplay: 0,
                                          },
                                      }
                            }
                        />
                        <DataOfSong songDetails={songAndList[0]} />
                    </div>
                    <div className="containerPlaylistNameList">
                        <DataOfList
                            search={search}
                            product={product}
                            dataOFProduct={songAndList[2]}
                            autoPlay={autoPlay}
                            setAutoPlay={setAutoPlay}
                        />
                        <div className={classes.rootList}>
                            {product === "album" ? (
                                <MyList
                                    list={songAndList[1]}
                                    search={search}
                                    pathname={pathname}
                                    coverImg={songAndList[2].cover_img}
                                    artistName={songAndList[2].artist_name}
                                    currentSong={songAndList[0]}
                                />
                            ) : (
                                <MyList
                                    list={songAndList[1]}
                                    search={search}
                                    pathname={pathname}
                                    currentSong={songAndList[0]}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

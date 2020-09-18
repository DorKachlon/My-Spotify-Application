import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/SingleSong.css";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import MyList from "./MyList";
const useStyles = makeStyles((theme) => ({
    rootList: {
        width: "40vw",
        backgroundColor: "transparent",
        borderRadius: "5px",
        marginTop: "auto",
        padding: 0,
        position: "absolute",
        bottom: 0,
    },

    itemOfList: {
        width: "38vw",
        padding: 0,
        color: "white",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "grey",
            "& .imgPlay": {
                visibility: "visible !important",
            },
        },
        margin: "3px",
    },
    itemSelected: {
        width: "38vw",
        padding: 0,
        backgroundColor: "rgb(40, 184, 105)",
        color: "white",
        borderRadius: "5px",
        "&:hover": {
            backgroundColor: "rgb(40, 184, 105)",
        },
        margin: "3px",
    },
    List: {
        padding: 0,
    },
}));
export default function SingleSong({ checked, setChecked }) {
    const { pathname, search } = useLocation();
    const [songAndList, setSongAndList] = useState();
    const product = search.split("=")[0].slice(1);
    const classes = useStyles();
    useEffect(() => {
        (async function loadSongAndList() {
            try {
                let newArr = [];
                const { data } = await axios.get(pathname);
                newArr.push(data[0]);
                if (search.includes("topSongs")) {
                    const dataList = await axios.get("/top_songs/");
                    newArr.push(dataList.data);
                } else {
                    const dataList = await axios.get(
                        `/${product}/songs/${search.split("=")[1]}`
                    );
                    newArr.push(dataList.data);
                }
                if (["album", "playlist"].includes(product)) {
                    const dataAlbum = await axios.get(
                        `/${product}/${search.split("=")[1]}`
                    );
                    newArr.push(dataAlbum.data[0]);
                }
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

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            {songAndList && (
                <div className="containerSingleSong">
                    <div>
                        <iframe
                            className="YoutubeVid"
                            title={songAndList[0].name}
                            style={{
                                frameBorder: "0",
                            }}
                            src={
                                checked
                                    ? songAndList[0].youtube_link
                                          .replace("watch?v=", "embed/")
                                          .split("&list")[0] + "?autoplay=1"
                                    : songAndList[0].youtube_link
                                          .replace("watch?v=", "embed/")
                                          .split("&list")[0]
                            }
                            allow="accelerometer; autoplay; encrypted-media"
                            allowFullScreen
                        />
                        <div className="dataSong">
                            <div style={{ color: "white" }}>
                                {songAndList[0].name}
                            </div>
                        </div>
                    </div>
                    <div className="containerPlaylistNameList">
                        <div className="dataPlaylist">
                            <div>
                                {search.includes("topSongs")
                                    ? "The top 20 songs"
                                    : songAndList[2].name}
                            </div>
                            <div className="autoPlay">
                                <div>auto play:</div>
                                <Switch
                                    checked={checked}
                                    onChange={handleChange}
                                    color="primary"
                                    inputProps={{
                                        "aria-label": "primary checkbox",
                                    }}
                                />
                            </div>
                        </div>
                        <div className={classes.rootList}>
                            {product === "album" ? (
                                <MyList
                                    list={songAndList[1]}
                                    search={search}
                                    pathname={pathname}
                                    coverImg={songAndList[2].cover_img}
                                    artistName={songAndList[2].artist_name}
                                />
                            ) : (
                                <MyList
                                    list={songAndList[1]}
                                    search={search}
                                    pathname={pathname}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

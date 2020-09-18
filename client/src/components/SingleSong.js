import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/SingleSong.css";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
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

    const classes = useStyles();
    console.log(checked);
    console.log("render singlesong");
    useEffect(() => {
        (async function loadSongAndList() {
            try {
                let newArr = [];
                const { data } = await axios.get(pathname);
                newArr.push(data[0]);
                const dataList = await axios.get("/top_songs/");
                newArr.push(dataList.data);
                setSongAndList(newArr);
            } catch (e) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${e.message}`,
                });
            }
        })();
    }, [pathname, search]);
    function lengthSong(length) {
        length = Number(length);
        var h = Math.floor(length / 3600);
        var m = Math.floor((length % 3600) / 60);
        var s = Math.floor((length % 3600) % 60);

        var hDisplay = h > 0 ? h + ":" : "";
        var mDisplay = m > 0 ? m + ":" : "";
        var sDisplay = s < 10 ? "0" + s : s;
        return hDisplay + mDisplay + sDisplay;
    }
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
                                    : "555555"}
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
                            <List
                                component="nav"
                                aria-label="main mailbox folders"
                                className={classes.List}
                            >
                                <div className="containerList">
                                    {songAndList[1].map((songObj) => {
                                        const link = `/song/${songObj.song_id}${search}`;
                                        return (
                                            <Link
                                                to={link}
                                                key={songObj.song_id}
                                            >
                                                <div className="containerListItem">
                                                    <ListItem
                                                        button
                                                        className={
                                                            Number(
                                                                pathname.split(
                                                                    "/"
                                                                )[2]
                                                            ) ===
                                                            songObj.song_id
                                                                ? classes.itemSelected
                                                                : classes.itemOfList
                                                        }
                                                    >
                                                        <div className="containerItem">
                                                            <img
                                                                className="imgListItem"
                                                                src={
                                                                    songObj.cover_img
                                                                }
                                                                alt=""
                                                            />
                                                            <img
                                                                className="imgPlay"
                                                                src="https://www.lynnettechadwick.com/wp-content/uploads/2015/04/play-button.png"
                                                                alt=""
                                                            />
                                                            <div className="containerNames">
                                                                <div className="nameListItem">
                                                                    {
                                                                        songObj.name
                                                                    }
                                                                </div>
                                                                <div className="artistListItem">
                                                                    {
                                                                        songObj.artist_name
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="duration">
                                                            {lengthSong(
                                                                songObj.length
                                                            )}
                                                        </div>
                                                    </ListItem>
                                                    <Divider />
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </List>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

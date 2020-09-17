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

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
export default function SingleSong() {
    const { pathname, search } = useLocation();
    const [songAndList, setSongAndList] = useState();
    const classes = useStyles();
    console.log("render singlesong");
    useEffect(() => {
        (async function loadSong() {
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

    return (
        <>
            {songAndList && (
                <div className="containerSingleSong">
                    <iframe
                        className="YoutubeVid"
                        title={songAndList[0].name}
                        style={{
                            width: "60vw",
                            height: "60vh",
                            frameBorder: "0",
                        }}
                        src={
                            songAndList[0].youtube_link
                                .replace("watch?v=", "embed/")
                                .split("&list")[0] + "?autoplay=1"
                        }
                        allow="accelerometer; autoplay; encrypted-media"
                        allowFullScreen
                    />
                    <div className="containerDataList">
                        <div style={{ color: "white" }}>
                            {songAndList[0].name}
                        </div>

                        <div className={classes.root}>
                            <List
                                component="nav"
                                aria-label="main mailbox folders"
                            >
                                <div className="containerList">
                                    {songAndList[1].map((songObj) => {
                                        const link = `/song/${songObj.song_id}${search}`;
                                        return (
                                            <>
                                                <Link
                                                    to={link}
                                                    key={songObj.song_id}
                                                >
                                                    <ListItem button>
                                                        <div className="containerItem">
                                                            <img
                                                                className="imgListItem"
                                                                src={
                                                                    songObj.cover_img
                                                                }
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
                                                    </ListItem>
                                                    <Divider />
                                                </Link>
                                            </>
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

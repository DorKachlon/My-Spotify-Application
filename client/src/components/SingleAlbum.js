import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import MyList from "./MyList";
import "../styles/SignleAlbum.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    rootList: {
        // width:"99vw"
    },
    itemOfList: {
        width: "99vw",
    },
}));
export default function SingleAlbum() {
    const { pathname, search } = useLocation();
    const [albumAndList, setAlbumAndList] = useState();
    const classes = useStyles();
    useEffect(() => {
        (async function loadSong() {
            try {
                let newArr = [];
                const { data } = await axios.get(pathname);
                newArr.push(data[0]);
                const dataList = await axios.get(
                    `/album/songs/${pathname.split("/")[2]}`
                );
                newArr.push(dataList.data);
                setAlbumAndList(newArr);
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
            {albumAndList && (
                <div className="containerSingleAlbum">
                    <div className="album">
                        <img
                            className="album-cover-img"
                            src={albumAndList[0].cover_img}
                            alt=""
                        />
                        <div>
                            <div className="album-name">
                                {albumAndList[0].name}
                            </div>
                            <div className="album-ditails">
                                Album &nbsp;• &nbsp;
                                <Link
                                    to={`/artist/${albumAndList[0].artist_id}`}
                                >
                                    {albumAndList[0].artist_name}
                                </Link>
                                &nbsp;•&nbsp;
                                {albumAndList[0].created_at.slice(0, 10)}
                                <br></br>
                                {albumAndList[1].length}{" "}
                                {albumAndList[1].length > 1 ? "songs" : "song"}
                            </div>
                        </div>
                    </div>
                    <div className={classes.rootList}>
                        <MyList
                            list={albumAndList[1]}
                            search={search}
                            pathname={pathname}
                            coverImg={albumAndList[0].cover_img}
                            artistName={albumAndList[0].artist_name}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

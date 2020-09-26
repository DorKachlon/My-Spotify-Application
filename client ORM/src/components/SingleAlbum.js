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
                const { data } = await axios.get(`/api${pathname}`);
                newArr.push(data);
                const { data: dataList } = await axios.get(
                    `/api/albums/${pathname.split("/")[2]}/songs`
                );
                newArr.push(dataList);
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
                            src={albumAndList[0].coverImg}
                            alt=""
                        />
                        <div>
                            <div className="album-name">
                                {albumAndList[0].name}
                            </div>
                            <div className="album-ditails">
                                Album &nbsp;• &nbsp;
                                <Link
                                    to={`/artists/${albumAndList[0].artistId}`}
                                >
                                    {albumAndList[0].Artist.name}
                                </Link>
                                &nbsp;•&nbsp;
                                {albumAndList[0].releasedAt.slice(0, 10)}
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
                            coverImg={albumAndList[0].coverImg}
                            artistName={albumAndList[0].Artist.name}
                            itsAlbum={true}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

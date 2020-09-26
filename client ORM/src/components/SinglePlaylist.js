import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import MyList from "./MyList";
import "../styles/SinglePlaylist.css";
export default function SinglePlaylist() {
    const { pathname, search } = useLocation();
    const [playlistAndList, setPlaylistAndList] = useState();
    useEffect(() => {
        (async function loadSong() {
            try {
                let newArr = [];
                const { data } = await axios.get(`/api${pathname}`);
                newArr.push(data);
                const { data: dataList } = await axios.get(
                    `/api/playlists/${pathname.split("/")[2]}/songs`
                );
                newArr.push(dataList);
                setPlaylistAndList(newArr);
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
            {playlistAndList && (
                <div className="containerSinglePlaylist">
                    <div className="playlist">
                        <img
                            className="playlist-cover-img"
                            src={playlistAndList[0].coverImg}
                            alt=""
                        />
                        <div>
                            <div className="playlist-name">
                                {playlistAndList[0].name}
                            </div>
                            <div className="playlist-ditails">
                                Playlist &nbsp;• &nbsp;
                                {playlistAndList[0].releasedAt.slice(0, 10)}
                                <br></br>
                                {playlistAndList[1].length}{" "}
                                {playlistAndList[1].length > 1
                                    ? "songs"
                                    : "song"}
                            </div>
                        </div>
                    </div>
                    <MyList
                        list={playlistAndList[1]}
                        search={search}
                        pathname={pathname}
                    />
                </div>
            )}
        </>
    );
}

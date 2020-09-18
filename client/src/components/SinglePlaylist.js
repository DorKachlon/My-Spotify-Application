import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import MyList from "./MyList";

export default function SinglePlaylist() {
    const { pathname, search } = useLocation();
    const [playlistAndList, setPlaylistAndList] = useState();
    console.log(playlistAndList);
    useEffect(() => {
        (async function loadSong() {
            try {
                let newArr = [];
                const { data } = await axios.get(pathname);
                newArr.push(data[0]);
                const dataList = await axios.get(
                    `/playlist/songs/${pathname.split("/")[2]}`
                );
                newArr.push(dataList.data);
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
                <>
                    <MyList
                        list={playlistAndList[1]}
                        search={search}
                        pathname={pathname}
                    />
                    <div style={{ color: "white" }}>SingleAlbum</div>
                </>
            )}
        </>
    );
}

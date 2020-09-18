import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import MyList from "./MyList";
export default function SingleAlbum() {
    const { pathname, search } = useLocation();
    const [albumAndList, setAlbumAndList] = useState();
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
                <>
                    <MyList
                        list={albumAndList[1]}
                        search={search}
                        pathname={pathname}
                        coverImg={albumAndList[0].cover_img}
                        artistName={albumAndList[0].artist_name}
                    />
                    <div style={{ color: "white" }}>SingleAlbum</div>
                </>
            )}
        </>
    );
}

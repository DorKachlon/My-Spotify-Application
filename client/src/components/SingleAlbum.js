import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function SingleAlbum() {
    const { pathname, search } = useLocation();
    const [albumAndList, setAlbumAndList] = useState();
    console.log(albumAndList);
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
    return <div style={{ color: "white" }}>SingleAlbum</div>;
}

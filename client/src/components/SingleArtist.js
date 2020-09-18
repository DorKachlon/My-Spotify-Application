import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/SingleArtist.css";

export default function SingleArtist() {
    const { pathname, search } = useLocation();
    const [artiatAndList, setArtiatAndList] = useState();
    useEffect(() => {
        (async function loadSongAndList() {
            try {
                let newArr = [];
                const { data } = await axios.get(pathname);
                newArr.push(data[0]);
                // const dataList = await axios.get("/top_songs/");
                // newArr.push(dataList.data);
                setArtiatAndList(newArr);
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
            {artiatAndList && (
                <>
                    <div class="pickgradient">
                        <img
                            className="artistImg"
                            src={artiatAndList[0].cover_img}
                            alt=""
                        />
                    </div>

                    <div className="black"></div>
                    <div style={{ color: "white" }}>SingleArtist</div>
                </>
            )}
        </>
    );
}

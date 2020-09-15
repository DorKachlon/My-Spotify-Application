import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Carousel from "react-material-ui-carousel";
import TopSongs from "./TopSongs";
import "../styles/home.css";
export default function Home() {
    const [topSongs, setTopSongs] = useState([]);

    // async function loadTop() {
    //     try {
    //         const { data } = await axios.get("/top_songs/");
    //         setTopSongs(data);
    //     } catch (e) {
    //         Swal.fire({
    //             icon: "error",
    //             title: "Oops...",
    //             text: `${e.message}`,
    //         });
    //     }
    // }
    useEffect(() => {
        (async function loadTop() {
            try {
                const { data } = await axios.get("/top_songs/");
                setTopSongs(data);
            } catch (e) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${e.message}`,
                });
            }
        })();
    }, []);

    return (
        <>
            <h1>WELCOME</h1>
            <div className="carouselTopSongs">
                <h2>Top 20 songs</h2>
                <Carousel autoPlay={false}>
                    <TopSongs elements={topSongs.slice(0, 5)} />
                    <TopSongs elements={topSongs.slice(5, 10)} />
                    <TopSongs elements={topSongs.slice(10, 15)} />
                    <TopSongs elements={topSongs.slice(15, 20)} />
                </Carousel>
            </div>
        </>
    );
}

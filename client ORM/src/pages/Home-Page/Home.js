import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import CarouselForWideScreen from "./CarouselForWideScreen";
import network from "../../network/network";
import "../../styles/home.css";
import { motion } from "framer-motion";
//horizontal scroll
import CarouselForSmallScreen from "./CarouselForSmallScreen";

export default function Home({ smallWindow }) {
    const [topSongsArtistPlaylistAlbum, setTopSongsArtistPlaylistAlbum] = useState([]);
    console.log(smallWindow);
    useEffect(() => {
        (async function loadTop() {
            let newArr = [];
            try {
                const { data } = await network.get("/api/interactions/top_songs/");
                newArr.push(data);
                const { data: dataArtist } = await network.get("/api/interactions/top_artists/");
                newArr.push(dataArtist);
                const { data: dataPlaylist } = await network.get(
                    "/api/interactions/top_playlists/"
                );
                newArr.push(dataPlaylist);
                const { data: dataAlbum } = await network.get("/api/interactions/top_albums/");
                newArr.push(dataAlbum);
                setTopSongsArtistPlaylistAlbum(newArr);
            } catch (e) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${e.message}`,
                });
            }
        })();
    }, []);

    const CarouselForSmallOrWideScreen = (product, i) => {
        if (smallWindow) {
            return (
                <CarouselForSmallScreen
                    topSongsArtistPlaylistAlbum={topSongsArtistPlaylistAlbum[i]}
                    product={product}
                />
            );
        } else {
            return (
                <CarouselForWideScreen
                    topSongsArtistPlaylistAlbum={topSongsArtistPlaylistAlbum[i]}
                    product={product}
                />
            );
        }
    };
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    default: { duration: 4 },
                }}
            >
                <h1 className="welcomeTitle">WELCOME</h1>
                <div className="carouselTopTwenty">
                    {topSongsArtistPlaylistAlbum[0] && (
                        <>
                            <h2 className="topTitle">Top 20 songs</h2>
                            {CarouselForSmallOrWideScreen("Song", 0)}
                        </>
                    )}
                </div>
                <div className="carouselTopTwenty">
                    {topSongsArtistPlaylistAlbum[1] && (
                        <>
                            <h2 className="topTitle">Top 20 Artists</h2>
                            {CarouselForSmallOrWideScreen("Artist", 1)}
                        </>
                    )}
                </div>
                <div className="carouselTopTwenty">
                    {topSongsArtistPlaylistAlbum[2] && (
                        <>
                            <h2 className="topTitle">Top 20 Playlists</h2>
                            {CarouselForSmallOrWideScreen("Playlist", 2)}
                        </>
                    )}
                </div>
                <div className="carouselTopTwenty">
                    {topSongsArtistPlaylistAlbum[3] && (
                        <>
                            <h2 className="topTitle">Top 20 Albums</h2>
                            {CarouselForSmallOrWideScreen("Album", 3)}
                        </>
                    )}
                </div>
            </motion.div>
        </>
    );
}

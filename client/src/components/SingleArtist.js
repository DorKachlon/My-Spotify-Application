import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import Swal from "sweetalert2";
import "../styles/SingleArtist.css";
import { Link } from "react-router-dom";

export default function SingleArtist() {
    const { pathname, search } = useLocation();
    const [artiatAndList, setArtiatAndList] = useState(); //[artist , songs , albums]
    useEffect(() => {
        (async function loadSongAndList() {
            try {
                let newArr = [];
                const { data } = await axios.get(pathname);
                newArr.push(data[0]);
                const songs = await axios.get(
                    `/artist/songs/${pathname.split("/")[2]}`
                );
                newArr.push(songs.data);
                const albums = await axios.get(
                    `/artist/albums/${pathname.split("/")[2]}`
                );
                newArr.push(albums.data);
                console.log(newArr);
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

    function arrayOfFiveForAlbums(array) {
        if (array.length < 6) return [array];
        let carouselPage = Math.ceil(array.length / 5);
        let newArr = [];
        for (let i = 0; i < carouselPage; i++) {
            let secArr = [];
            for (let j = 0; j < 5; j++) {
                if (artiatAndList[1][j + i * 5]) {
                    secArr.push(array[j + i * 5]);
                }
            }
            newArr.push(secArr);
        }
        return newArr;
    }
    return (
        <>
            {artiatAndList && (
                <>
                    <div className="pickgradient">
                        <img
                            className="artistImg"
                            src={artiatAndList[0].cover_img}
                            alt=""
                        />
                    </div>
                    <h2 className="topTitle">songs</h2>
                    {artiatAndList[2].length !== 0 && (
                        <Carousel //carousel for albums
                            autoPlay={false}
                            navButtonsAlwaysVisible={true}
                        >
                            {arrayOfFiveForAlbums(artiatAndList[1]).map((array, i) => {
                                return (
                                    <div className="singleCarousel" key={i}>
                                        {array.map((elem, j) => {
                                            const link = `/album/${elem.album_id}`;
                                            return (
                                                <Link to={link} key={j}>
                                                    <div className="containerSingleItem">
                                                        <div className="containerImage">
                                                            <img
                                                                className="image"
                                                                src={
                                                                    elem.album_cover_img
                                                                }
                                                                alt=""
                                                            ></img>
                                                        </div>
                                                        <p className="ProductName">
                                                            {elem.name}
                                                        </p>
                                                            <p className="year">{elem.created_at.slice(0, 10)}</p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </Carousel>)}
                    <h2 className="topTitle">Albums</h2>
                    {artiatAndList[2].length !== 0 && (
                        <Carousel //carousel for albums
                            autoPlay={false}
                            navButtonsAlwaysVisible={true}
                        >
                            {arrayOfFiveForAlbums(artiatAndList[2]).map((array, i) => {
                                return (
                                    <div className="singleCarousel" key={i}>
                                        {array.map((elem, j) => {
                                            const link = `/album/${elem.album_id}`;
                                            return (
                                                <Link to={link} key={j}>
                                                    <div className="containerSingleItem">
                                                        <div className="containerImage">
                                                            <img
                                                                className="image"
                                                                src={
                                                                    elem.cover_img
                                                                }
                                                                alt=""
                                                            ></img>
                                                        </div>
                                                        <p className="ProductName">
                                                            {elem.name}
                                                        </p>
                                                            <p className="year">{elem.created_at.slice(0, 10)}</p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </Carousel>
                    )}
                </>
            )}
        </>
    );
}

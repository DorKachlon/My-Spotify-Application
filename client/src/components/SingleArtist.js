import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/SingleArtist.css"
export default function SingleArtist() {
    const { obj } = useLocation().state;
    console.log(obj);
    return (
        <>
        <div class="pickgradient">
        <img className="artistImg" src={obj.cover_img} alt=""/>
</div>
           
            <div className="black"></div>
            <div style={{ color: "white" }}>SingleArtist</div>
        </>
    );
}

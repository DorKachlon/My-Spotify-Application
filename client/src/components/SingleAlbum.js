import React from 'react'
import { useLocation } from "react-router-dom";

export default function SingleAlbum() {
    const { obj } = useLocation().state;
    console.log(obj)
    return <div style={{ color: "white" }}>SingleAlbum</div>;

}

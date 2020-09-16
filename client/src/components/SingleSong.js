import React from "react";
import { useRouteMatch, useLocation } from "react-router-dom";

export default function SingleSong(props) {
    const { url } = useRouteMatch();
    const { obj } = useLocation().state;
    const { topSongs } = useLocation().state;
    const link = obj.youtube_link
        .replace("watch?v=", "embed/")
        .split("&list")[0];
    const title = obj.name;
    console.log(url);
    console.log(obj);
    console.log(topSongs);
    return (
        <>
            <div style={{ color: "white" }}>{title}</div>
            <iframe
                title={title}
                style={{ width: "60vw", height: "60vh", frameBorder: "0" }}
                src={link + "?autoplay=1"}
                allow="accelerometer; autoplay; encrypted-media"
                allowFullScreen
            />
        </>
    );
}

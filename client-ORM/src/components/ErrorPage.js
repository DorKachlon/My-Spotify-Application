import React, { useRef, useEffect } from "react";
import "../styles/errorPage.css";

export default function ErrorPage() {
    const title = "404";
    const video = useRef(null);
    const link = "https://www.youtube.com/watch?v=gnnIrTLlLyA";

    useEffect(() => {
        video.current.focus();
    }, []);

    return (
        <div>
            <img
                className="pulley1"
                src="https://i.ibb.co/zngHj4z/1.png"
                alt=""
                border="0"
            />
            <img
                className="pulley2"
                src="https://i.ibb.co/wcb31vt/2.png"
                alt=""
                border="0"
            />
            <img
                className="img404"
                src="https://i.ibb.co/1RSCk4T/404.png"
                alt="404"
                border="0"
            />
            <iframe
                ref={video}
                className="YoutubeVid"
                title={title}
                style={{
                    position: "absolute",
                    zIndex: "2",
                    width: "60vw",
                    height: "60vh",
                    frameBorder: "0",
                    visibility: "hidden",
                }}
                src={
                    link.replace("watch?v=", "embed/").split("&list")[0] +
                    "?autoplay=1"
                }
                allow="accelerometer; autoplay; encrypted-media"
                allowFullScreen
                autoplay
            />
        </div>
    );
}

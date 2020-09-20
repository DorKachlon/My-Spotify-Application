import React, { useState } from "react";
import YouTube from "react-youtube";
export default function Songs() {
    const [id, setID] = useState("_yHBHDkls-A");
    function end() {
        setID("ctHXPuEMASs");
    }
    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <>
            <YouTube videoId={id} onEnd={end} opts={opts} />
        </>
    );
}

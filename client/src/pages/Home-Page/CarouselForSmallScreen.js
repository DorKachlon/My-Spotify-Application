import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import TopTwenty from "./TopTwenty";

import "./HorizontalDrag.css";

export default function CarouselForSmallScreen({ topSongsArtistPlaylistAlbum, product }) {
    return (
        <div>
            {topSongsArtistPlaylistAlbum && (
                <ScrollContainer className="container">
                    <TopTwenty elements={topSongsArtistPlaylistAlbum} product={product} />
                </ScrollContainer>
            )}
        </div>
    );
}

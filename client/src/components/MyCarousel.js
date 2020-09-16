import React from "react";
import Carousel from "react-material-ui-carousel";
import TopSongs from "./TopSongs";
export default function MyCarousel({
    topSongsArtistPlaylistAlbum,
    i,
    product,
}) {
    return (
        <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
            <TopSongs
                elements={topSongsArtistPlaylistAlbum[i].slice(0, 5)}
                product={product}
            />
            <TopSongs
                elements={topSongsArtistPlaylistAlbum[i].slice(5, 10)}
                product={product}
            />
            <TopSongs
                elements={topSongsArtistPlaylistAlbum[i].slice(10, 15)}
                product={product}
            />
            <TopSongs
                elements={topSongsArtistPlaylistAlbum[i].slice(15, 20)}
                product={product}
            />
        </Carousel>
    );
}

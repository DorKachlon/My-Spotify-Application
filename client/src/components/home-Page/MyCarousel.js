import React from "react";
import Carousel from "react-material-ui-carousel";
import TopTwenty from "./TopTwenty";
export default function MyCarousel({
    topSongsArtistPlaylistAlbum,
    i,
    product,
}) {
    return (
        <Carousel autoPlay={false} navButtonsAlwaysVisible={true}>
            <TopTwenty
                elements={topSongsArtistPlaylistAlbum[i].slice(0, 5)}
                product={product}
            />
            <TopTwenty
                elements={topSongsArtistPlaylistAlbum[i].slice(5, 10)}
                product={product}
            />
            <TopTwenty
                elements={topSongsArtistPlaylistAlbum[i].slice(10, 15)}
                product={product}
            />
            <TopTwenty
                elements={topSongsArtistPlaylistAlbum[i].slice(15, 20)}
                product={product}
            />
        </Carousel>
    );
}

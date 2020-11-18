"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const obj = [
            {
                id: 1,
                name: "TIM",
                artist_id: 1,
                cover_img:
                    "https://www.helicon.co.il/wp-content/uploads/2019/06/AVICII_250.jpg",
                released_at: "2019-06-05",
                created_at: "2019-06-05",
                updated_at: "2020-09-12",
            },
            {
                id: 2,
                name: "÷ (Deluxe)",
                artist_id: 2,
                cover_img:
                    "https://img.secure.cdn-2.warnerartists.net/media/catalog/product/cache/733/image/600x/9df78eab33525d08d6e5fb8d27136e95/e/d/edsheeran-divide-replacement_1.jpg",
                released_at: "2017-03-02",
                created_at: "2017-03-02",
                updated_at: "2020-09-12",
            },
            {
                id: 3,
                name: "Scorpion",
                artist_id: 3,
                cover_img:
                    "https://img.discogs.com/i-3zFLbT4-s6Dm_0Fs5zg3nmQ4w=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12252821-1535317927-2134.jpeg.jpg",
                released_at: "2018-06-28",
                created_at: "2018-06-28",
                updated_at: "2020-09-12",
            },
            {
                id: 4,
                name: "Kids See Ghosts",
                artist_id: 4,
                cover_img:
                    "https://img.discogs.com/taeF09Gb2zmZGjtjocBPksHOLYk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12737263-1541252949-2277.jpeg.jpg",
                released_at: "2018-06-07",
                created_at: "2018-06-07",
                updated_at: "2020-09-12",
            },
            {
                id: 5,
                name: "Revival ",
                artist_id: 5,
                cover_img:
                    "https://img.discogs.com/9BsiyPTsPmdofGDXYj9hLRPODpk=/fit-in/600x599/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-11982210-1527964325-1617.jpeg.jpg",
                released_at: "2017-12-14",
                created_at: "2017-12-14",
                updated_at: "2020-09-12",
            },
            {
                id: 6,
                name: "Consideration (Dance Remixes)",
                artist_id: 6,
                cover_img:
                    "https://m.media-amazon.com/images/I/61i0VcUTxKL._SS500_.jpg",
                released_at: "2017-09-07",
                created_at: "2017-09-07",
                updated_at: "2020-09-12",
            },
            {
                id: 7,
                name: "OMER",
                artist_id: 7,
                cover_img:
                    "https://yosmusic.com/wp-content/uploads/2020/01/%D7%A2%D7%95%D7%9E%D7%A8-%D7%90%D7%93%D7%9D-Omer.jpg",
                released_at: "2020-02-01",
                created_at: "2020-02-01",
                updated_at: "2020-09-12",
            },
            {
                id: 8,
                name: "מכאן ועד הנצח",
                artist_id: 8,
                cover_img:
                    "https://upload.wikimedia.org/wikipedia/he/8/8f/%D7%9E%D7%9B%D7%90%D7%9F_%D7%95%D7%A2%D7%93_%D7%94%D7%A0%D7%A6%D7%97.png",
                released_at: "2020-04-11",
                created_at: "2020-04-11",
                updated_at: "2020-09-12",
            },
            {
                id: 9,
                name: "V",
                artist_id: 9,
                cover_img:
                    "https://upload.wikimedia.org/wikipedia/en/5/53/Maroon_5_-_V_%28Official_Album_Cover%29.png",
                released_at: "2014-08-28",
                created_at: "2014-08-28",
                updated_at: "2020-09-12",
            },
            {
                id: 10,
                name: "Joytime ",
                artist_id: 10,
                cover_img:
                    "https://m.media-amazon.com/images/I/81upColJExL._SS500_.jpg",
                released_at: "2016-01-07",
                created_at: "2016-01-07",
                updated_at: "2020-09-12",
            },
            {
                id: 11,
                name: "Lost on You",
                artist_id: 11,
                cover_img:
                    "https://upload.wikimedia.org/wikipedia/en/1/1f/LP_-_Lost_on_You_album.jpg",
                released_at: "2015-11-19",
                created_at: "2015-11-19",
                updated_at: "2020-09-12",
            },
            {
                id: 12,
                name: "Konvicted",
                artist_id: 12,
                cover_img:
                    "https://upload.wikimedia.org/wikipedia/en/8/85/AKonvicted.jpg",
                released_at: "2006-11-13",
                created_at: "2006-11-13",
                updated_at: "2020-09-12",
            },
            {
                id: 13,
                name: "The Ghost Note Symphonies",
                artist_id: 13,
                cover_img:
                    "https://img.discogs.com/y-ikSoC0UhTUIUjlnh2z_PuYj0s=/fit-in/600x590/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-12303782-1533179377-9618.jpeg.jpg",
                released_at: "2018-07-26",
                created_at: "2018-07-26",
                updated_at: "2020-09-12",
            },
            {
                id: 14,
                name: "To Be Loved",
                artist_id: 14,
                cover_img:
                    "https://upload.wikimedia.org/wikipedia/en/0/01/...To_Be_Loved_the_Best_of_Papa_Roach.jpg",
                released_at: "2013-04-14",
                created_at: "2013-04-14",
                updated_at: "2020-09-12",
            },
            {
                id: 15,
                name: "In Rainbows",
                artist_id: 15,
                cover_img:
                    "https://upload.wikimedia.org/wikipedia/en/2/2e/In_Rainbows_Official_Cover.jpg",
                released_at: "2007-10-09",
                created_at: "2007-10-09",
                updated_at: "2020-09-12",
            },
            {
                id: 16,
                name: "Hardwell ON AIR",
                artist_id: 16,
                cover_img:
                    "https://cdn.1001.tl/images/artworks/sources/0/0/4/a/200721-artwork-hardwell-on-air-5f1663a6bc7ab-Medium.jpg",
                released_at: "2020-08-31",
                created_at: "2020-08-31",
                updated_at: "2020-09-12",
            },
            {
                id: 17,
                name: "The London Sessions",
                artist_id: 17,
                cover_img:
                    "https://img.discogs.com/AQQ1FlXUBYxTCS2NlaxXINas1No=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-15321243-1589707641-9091.jpeg.jpg",
                released_at: "2020-05-14",
                created_at: "2020-05-14",
                updated_at: "2020-09-12",
            },
            {
                id: 18,
                name: "Seven",
                artist_id: 18,
                cover_img:
                    "https://upload.wikimedia.org/wikipedia/en/7/7e/MartinGarrixSeven.jpg",
                released_at: "2016-10-27",
                created_at: "2016-10-27",
                updated_at: "2020-09-12",
            },
            {
                id: 19,
                name: "Nothing But the Beat Ultimate",
                artist_id: 19,
                cover_img:
                    "https://img.discogs.com/jfPM4GHNF7IAyl6YBrJuqBpzrAM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5111172-1457155301-2864.jpeg.jpg",
                released_at: "2011-08-25",
                created_at: "2011-08-25",
                updated_at: "2020-09-12",
            },
            {
                id: 20,
                name: "Oh My My",
                artist_id: 20,
                cover_img:
                    "https://upload.wikimedia.org/wikipedia/en/4/46/OneRepublic_-_Oh_My_My.jpg",
                released_at: "2015-12-31",
                created_at: "2015-12-31",
                updated_at: "2020-09-12",
            },
        ];
        return queryInterface.bulkInsert("Albums", obj);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};

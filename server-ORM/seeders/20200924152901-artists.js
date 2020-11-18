"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const obj = [
            {
                id: 1,
                name: "Avicii",
                cover_img:
                    "https://www.bpm-music.com/wp-content/uploads/2018/04/avicii-harmony-bpm.png",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 2,
                name: "Ed Sheeran",
                cover_img:
                    "https://i2.wp.com/hkpub.net/wp-content/uploads/2019/07/Ed-Sheeran-Press-Photo-2-Credit-Mark-Surridge-crop.jpg?fit=1024%2C911&ssl=1",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 3,
                name: "Drake",
                cover_img:
                    "https://media.resources.festicket.com/www/artists/Drake.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 4,
                name: "Kanye West",
                cover_img:
                    "https://media1.popsugar-assets.com/files/thumbor/3V8qh1kIlOKjZCnfQq-2vhQbQnM/249x163:2149x2063/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/24/905/n/1922398/d9c250fc5e5435738e0e78.04534326_/i/Kanye-West.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 5,
                name: "Eminem",
                cover_img:
                    "https://vignette.wikia.nocookie.net/ideas/images/c/c1/Eminem.JPG/revision/latest?cb=20181130203245",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 6,
                name: "Rihanna",
                cover_img:
                    "https://thumbor.forbes.com/thumbor/1950x1950/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ceec355142c500008f42068%2F0x0.jpg%3FcropX1%3D32%26cropX2%3D1982%26cropY1%3D257%26cropY2%3D2207",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 7,
                name: "Omer Adam",
                cover_img:
                    "https://s3.amazonaws.com/bit-photos/large/9851702.jpeg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 8,
                name: "Eyal Golan",
                cover_img:
                    "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/432785",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 9,
                name: "\tMaroon 5",
                cover_img:
                    "https://media.npr.org/assets/music/news/2010/09/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s800-c85.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 10,
                name: "Marshmello",
                cover_img:
                    "https://thumbor.forbes.com/thumbor/1999x1999/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5be1e2a3a7ea437059163919%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1999%26cropY1%3D0%26cropY2%3D1999",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 11,
                name: "LP",
                cover_img:
                    "https://www.nme.com/wp-content/uploads/2020/01/012220-LP-Mary-McGuire-Bluestfest.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 12,
                name: "Akon",
                cover_img:
                    "https://imagesvc.meredithcorp.io/v3/mm/gif?q=85&c=sc&poi=%5B800%2C500%5D&w=1600&h=1067&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F01%2Fakon-city-senegal-akon0120.gif",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 13,
                name: "Rise Against",
                cover_img:
                    "https://www.radiopunk.it/wp-content/uploads/2018/05/rise-against.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 14,
                name: "Papa Roach",
                cover_img:
                    "https://i1.wp.com/rockkmzk.com/wp-content/uploads/2017/03/papa-roach-paparoach.com-credits.jpg?resize=1000%2C665",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 15,
                name: "Radio Head",
                cover_img:
                    "https://www.rollingstone.com/wp-content/uploads/2020/03/Radiohead.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 16,
                name: "Hardwell",
                cover_img:
                    "https://www.clubbingtv.com/wp-content/uploads/2016/02/unnamed-2.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 17,
                name: "Tiesto",
                cover_img:
                    "https://www.discoverbenelux.com/wp-content/uploads/2015/08/Tiesto.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 18,
                name: "Martin Gerrix",
                cover_img:
                    "https://static.billboard.com/files/media/martin-garrix-2017-cr-Rachel-Kaplan-billboard-1548-1024x677.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 19,
                name: "David Guetta",
                cover_img:
                    "https://static.billboard.com/files/media/David-Guetta-press-by-Guerin-Blask-2019-billboard-1548-1024x677.jpg",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
            {
                id: 20,
                name: "OneRepublic",
                cover_img:
                    "https://pmcvariety.files.wordpress.com/2017/06/onerepublic.jpg?w=1000",
                updated_at: "2020-09-12",
                created_at: "2020-09-12",
                released_at: "2020-09-12",
            },
        ];
        return queryInterface.bulkInsert("Artists", obj);
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

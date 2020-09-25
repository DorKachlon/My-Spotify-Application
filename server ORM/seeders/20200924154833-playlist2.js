"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const obj = [
            {
                id: 1,
                name: "\tMaroon 5 & Marshmello",
                cover_img:
                    "https://fastly.alonetone.com/process/k6uwua8fgkboxls0m5qj8jweyg1y?crop=1%3A1&width=1248&quality=68",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 2,
                name: "Omer Adam & Eyal Golan",
                cover_img:
                    "https://images.8tracks.com/cover/i/002/690/060/Hebrew-1049.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 3,
                name: "Chill",
                cover_img:
                    "https://wi.wallpapertip.com/wsimgs/50-505075_spotify-playlist-covers-chill.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 4,
                name: "Metal",
                cover_img:
                    "https://images.8tracks.com/cover/i/000/327/910/3626-black-metal-and-white-1024x768px-wallpapers-black-metal-bands-1897.jpg?rect=128,0,768,768&q=98&fm=jpg&fit=max&w=640&h=640",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 5,
                name: "Techno",
                cover_img:
                    "https://images.8tracks.com/cover/i/000/368/322/IMG_6079-2013.jpg?rect=0,105,539,539&q=98&fm=jpg&fit=max",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 6,
                name: "Hip Hop",
                cover_img:
                    "https://i.pinimg.com/originals/0a/66/36/0a66367e697789bf1a35ff5342610707.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 7,
                name: "Summer 2020",
                cover_img:
                    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bfb20471822747.5bd2110e65f54.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 8,
                name: "Remix",
                cover_img:
                    "https://images.8tracks.com/cover/i/002/345/610/remix-5362.png?rect=0,125,500,500&q=98&fm=jpg&fit=max",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 9,
                name: "Israeli",
                cover_img:
                    "https://techpolicy.org.il/wp-content/uploads/2018/03/hero.png",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 10,
                name: "Happy Hour",
                cover_img:
                    "https://i.pinimg.com/originals/d3/b1/25/d3b1252338c0461134e34aa7f902552e.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 11,
                name: "Worout",
                cover_img: "https://i.redd.it/q3varo58nxkz.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 12,
                name: "Good Morning",
                cover_img:
                    "https://i.pinimg.com/736x/69/83/f5/6983f5ef3d65f55d6bfbfa9248fe0e71.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 13,
                name: "Good Night",
                cover_img:
                    "https://specials-images.forbesimg.com/imageserve/1016975820/960x0.jpg?fit=scale",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 14,
                name: "Sunset",
                cover_img:
                    "https://images.8tracks.com/cover/i/001/389/033/47668.original-3675.png?rect=85,0,330,330&q=98&fm=jpg&fit=max",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 15,
                name: "Love",
                cover_img:
                    "https://saltpepperspeak.files.wordpress.com/2020/01/how-technology-is-changing-the-way-we-love.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 16,
                name: "90s Hip Hop",
                cover_img:
                    "https://www.thebostoncalendar.com/system/events/photos/000/159/038/original/90's_hip_hop.jpg?1556733186",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 17,
                name: "party",
                cover_img:
                    "https://www.scoutmag.ph/wp-content/uploads/partypregame-2.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 18,
                name: "Sad moo",
                cover_img:
                    "https://cdn.playlists.net/images/playlists/image/medium/6e1c4322d061988d268467a62759741b.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 19,
                name: "Tomorrowland",
                cover_img:
                    "https://edmworldmagazine.com/wp-content/uploads/2018/09/Web-Post_Tomorrowland-Winter_Headliners_2018_02-min.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
            {
                id: 20,
                name: "Rock N Roll",
                cover_img:
                    "https://www.jolina.com/uploads/images/_large/_rockrollcircle-0.jpg",
                released_at: "2020-09-12",
                created_at: "2020-09-12",
                updated_at: "2020-09-12",
            },
        ];
        return queryInterface.bulkInsert("Playlists", obj);
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

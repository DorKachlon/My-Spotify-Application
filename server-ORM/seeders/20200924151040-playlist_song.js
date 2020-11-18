"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const obj = [
            {
                playlist_id: 1,
                song_id: 45,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 46,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 47,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 48,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 49,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 50,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 51,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 52,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 53,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 1,
                song_id: 54,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 35,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 36,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 37,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 38,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 39,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 40,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 41,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 42,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 43,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
            {
                playlist_id: 2,
                song_id: 44,
                released_at: "2020-06-21",
                updated_at: "2020-06-21",
                created_at: "2020-06-21",
            },
        ];
        return queryInterface.bulkInsert("Playlist_songs", obj);
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

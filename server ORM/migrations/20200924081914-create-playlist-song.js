"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Playlist_songs", {
            playlist_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            song_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Playlist_songs");
    },
};

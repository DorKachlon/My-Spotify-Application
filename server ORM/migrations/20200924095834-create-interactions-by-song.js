"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Interactions_by_songs", {
            user_id: {
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            song_id: {
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            is_liked: {
                type: Sequelize.BOOLEAN,
            },
            play_count: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable("Interactions_by_songs");
    },
};

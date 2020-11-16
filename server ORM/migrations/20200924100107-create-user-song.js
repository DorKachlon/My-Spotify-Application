"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("User_songs", {
            user_id: {
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            song_id: {
                primaryKey: true,
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
        await queryInterface.dropTable("User_songs");
    },
};

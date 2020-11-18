"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        Promise.all(
            await [
                queryInterface.addColumn("songs", "deleted_at", {
                    type: Sequelize.DATE,
                }),
                queryInterface.addColumn("albums", "deleted_at", {
                    type: Sequelize.DATE,
                }),
                queryInterface.addColumn("artists", "deleted_at", {
                    type: Sequelize.DATE,
                }),
                queryInterface.addColumn("playlists", "deleted_at", {
                    type: Sequelize.DATE,
                }),
                queryInterface.addColumn("users", "deleted_at", {
                    type: Sequelize.DATE,
                }),
            ]
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};

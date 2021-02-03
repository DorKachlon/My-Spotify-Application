"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("playlist_songs", {
      playlist_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      song_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      released_at: {
        allowNull: false,
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("playlist_songs");
  },
};

"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("interactions_by_songs", {
      user_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      song_id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      is_liked: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      play_count: {
        allowNull: false,
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
    await queryInterface.dropTable("interactions_by_songs");
  },
};

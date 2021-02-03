"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("songs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      youtube_link: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      album_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      artist_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      length: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      track_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      lyrics: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("songs");
  },
};

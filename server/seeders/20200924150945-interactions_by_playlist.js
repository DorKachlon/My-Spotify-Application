"use strict";
const interactionsPlaylists = require("./seedFiles/interactionsPlaylists");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("interactions_by_playlists", interactionsPlaylists, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("interactions_by_playlists", null, {});
  },
};

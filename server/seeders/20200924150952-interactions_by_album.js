"use strict";
const interactionsAlbums = require("./seedFiles/interactionsAlbums");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("interactions_by_albums", interactionsAlbums, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("interactions_by_albums", null, {});
  },
};

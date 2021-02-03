"use strict";
const interactionsSongs = require("./seedFiles/interactionsSongs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("interactions_by_songs", interactionsSongs, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("interactions_by_songs", null, {});
  },
};

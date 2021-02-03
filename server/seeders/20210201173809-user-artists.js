"use strict";
const userArtists = require("./seedFiles/userArtists");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user_artists", userArtists, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_artists", null, {});
  },
};

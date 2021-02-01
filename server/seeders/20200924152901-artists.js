"use strict";
const artists = require("./seedFiles/artists");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("artists", artists, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("artists", null, {});
  },
};

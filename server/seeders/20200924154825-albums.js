"use strict";
const albums = require("./seedFiles/albums");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("albums", albums, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("albums", null, {});
  },
};

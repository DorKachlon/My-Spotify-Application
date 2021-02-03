"use strict";
const playlistSongs = require("./seedFiles/playlistSongs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("playlist_songs", playlistSongs, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("playlist_songs", null, {});
  },
};

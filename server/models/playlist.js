"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Interactions_by_playlist, {
        foreignKey: "playlistId",
      });
      this.hasMany(models.User_playlist, {
        foreignKey: "playlistId",
      });
      this.hasMany(models.Playlist_song, {
        foreignKey: "playlistId",
      });
    }
  }
  Playlist.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      coverImg: { type: DataTypes.STRING, allowNull: false },
      releasedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Playlist",
      tableName: "playlists",
      paranoid: true,
    }
  );
  return Playlist;
};

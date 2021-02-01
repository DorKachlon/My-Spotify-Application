"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlist_song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Playlist, {
        foreignKey: "playlistId",
      });
      this.belongsTo(models.Song, {
        foreignKey: "songId",
      });
    }
  }
  Playlist_song.init(
    {
      playlistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      songId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      releasedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Playlist_song",
      tableName: "playlist_songs",
    }
  );
  return Playlist_song;
};

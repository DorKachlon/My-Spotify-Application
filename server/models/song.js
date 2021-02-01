"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Album, {
        foreignKey: "albumId",
      });
      this.belongsTo(models.Artist, {
        foreignKey: "artistId",
      });
      this.hasMany(models.UserSong, {
        foreignKey: "songId",
      });
      this.hasMany(models.InteractionsBySong, {
        foreignKey: "songId",
      });
      this.hasMany(models.PlaylistSong, {
        foreignKey: "songId",
      });
    }
  }
  Song.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      youtubeLink: { type: DataTypes.STRING, allowNull: false },
      albumId: { type: DataTypes.INTEGER, allowNull: false },
      artistId: { type: DataTypes.INTEGER, allowNull: false },
      length: { type: DataTypes.INTEGER, allowNull: false },
      trackNumber: { type: DataTypes.INTEGER, allowNull: false },
      lyrics: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Song",
      tableName: "songs",
      paranoid: true,
    }
  );
  return Song;
};

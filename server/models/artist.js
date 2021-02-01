"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.UserArtist, {
        foreignKey: "artistId",
      });
      this.hasMany(models.Song, {
        foreignKey: "artistId",
      });
      this.hasMany(models.Album, {
        foreignKey: "artistId",
      });
    }
  }
  Artist.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      coverImg: { type: DataTypes.STRING, allowNull: false },
      releasedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Artist",
      tableName: "artists",

      paranoid: true,
    }
  );
  return Artist;
};

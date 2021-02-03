"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Artist, {
        foreignKey: "artistId",
      });
      this.hasMany(models.UserAlbum, {
        foreignKey: "albumId",
      });
      this.hasMany(models.Song, {
        foreignKey: "albumId",
      });
      this.hasMany(models.InteractionsByAlbum, {
        foreignKey: "albumId",
      });
    }
  }
  Album.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      artistId: { type: DataTypes.INTEGER, allowNull: false },
      coverImg: { type: DataTypes.STRING, allowNull: false },
      releasedAt: { type: DataTypes.DATE, allowNull: false },
    },
    {
      sequelize,
      modelName: "Album",
      tableName: "albums",
      paranoid: true,
    }
  );
  return Album;
};

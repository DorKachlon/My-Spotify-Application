"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class InteractionsByAlbum extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
      this.belongsTo(models.Album, {
        foreignKey: "albumId",
      });
    }
  }
  InteractionsByAlbum.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      albumId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      isLiked: { type: DataTypes.BOOLEAN, allowNull: false },
      playCount: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "InteractionsByAlbum",
      tableName: "interactions_by_albums",
    }
  );
  return InteractionsByAlbum;
};

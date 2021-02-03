"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class InteractionsBySong extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
      this.belongsTo(models.Song, {
        foreignKey: "songId",
      });
    }
  }
  InteractionsBySong.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      songId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      isLiked: { type: DataTypes.BOOLEAN, allowNull: false },
      playCount: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "InteractionsBySong",
      tableName: "interactions_by_songs",
    }
  );
  return InteractionsBySong;
};

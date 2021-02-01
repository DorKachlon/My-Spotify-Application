"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class InteractionsByPlaylist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
      });
      this.belongsTo(models.Playlist, {
        foreignKey: "playlistId",
      });
    }
  }
  InteractionsByPlaylist.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      playlistId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      isLiked: { type: DataTypes.BOOLEAN, allowNull: false },
      playCount: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "InteractionsByPlaylist",
      tableName: "interactions_by_playlists",
    }
  );
  return InteractionsByPlaylist;
};

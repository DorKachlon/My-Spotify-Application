"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPlaylist extends Model {
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
  UserPlaylist.init(
    {
      userId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
      playlistId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "UserPlaylist",
      tableName: "user_playlists",
    }
  );
  return UserPlaylist;
};

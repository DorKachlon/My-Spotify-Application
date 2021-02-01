"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserSong extends Model {
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
  UserSong.init(
    {
      userId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
      songId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "UserSong",
      tableName: "user_songs",
    }
  );
  return UserSong;
};

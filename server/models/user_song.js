"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_song extends Model {
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
  User_song.init(
    {
      userId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
      songId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "User_song",
      tableName: "user_songs",
    }
  );
  return User_song;
};

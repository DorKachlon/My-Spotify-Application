"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Album, {
        foreignKey: "albumId",
      });
      this.belongsTo(models.User, {
        foreignKey: "UserId",
      });
    }
  }
  User_album.init(
    {
      userId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
      albumId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "User_album",
    }
  );
  return User_album;
};

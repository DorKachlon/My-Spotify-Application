"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserArtist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "UserId",
      });
      this.belongsTo(models.Artist, {
        foreignKey: "artistId",
      });
    }
  }
  UserArtist.init(
    {
      userId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
      artistId: { primaryKey: true, type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "UserArtist",
      tableName: "user_artists",
    }
  );
  return UserArtist;
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Interactions_by_song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Interactions_by_song.init({
    userId: DataTypes.INTEGER,
    songId: DataTypes.INTEGER,
    isLiked: DataTypes.BOOLEAN,
    playCount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Interactions_by_song',
  });
  return Interactions_by_song;
};
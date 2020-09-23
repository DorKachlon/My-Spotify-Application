'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Song.init({
    song_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    youtube_link: DataTypes.STRING,
    album_id: DataTypes.INTEGER,
    artist_id: DataTypes.INTEGER,
    length: DataTypes.INTEGER,
    track_number: DataTypes.INTEGER,
    lyrics: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};
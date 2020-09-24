"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Playlist_song extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Playlist_song.init(
        {
            playlistId: { type: DataTypes.INTEGER, allowNull: false },
            songId: { type: DataTypes.INTEGER, allowNull: false },
            uploadAt: { type: DataTypes.DATA, defaultValue: sequelize.NOW },
        },
        {
            sequelize,
            modelName: "Playlist_song",
        }
    );
    return Playlist_song;
};

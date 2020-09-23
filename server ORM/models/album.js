"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Album extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Album.init(
        {
            album_id: DataTypes.INTEGER,
            name: DataTypes.STRING,
            artist_id: DataTypes.INTEGER,
            cover_img: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Album",
        }
    );
    return Album;
};

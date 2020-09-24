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
            this.hasMany(models.Song);
        }
    }
    Album.init(
        {
            name: { type: DataTypes.STRING, allowNull: false },
            artistId: { type: DataTypes.INTEGER, allowNull: false },
            coverImg: { type: DataTypes.STRING, allowNull: false },
            createdAt: { type: DataTypes.DATA, allowNull: false },
            uploadAt: { type: DataTypes.DATA, defaultValue: sequelize.NOW },
        },
        {
            sequelize,
            modelName: "Album",
        }
    );
    return Album;
};

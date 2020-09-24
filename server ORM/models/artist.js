"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Artist extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.Song);
        }
    }
    Artist.init(
        {
            name: { type: DataTypes.STRING, allowNull: false },
            coverImg: { type: DataTypes.STRING, allowNull: false },
            createdAt: { type: DataTypes.DATA, defaultValue: sequelize.NOW },
            uploadAt: { type: DataTypes.DATA, defaultValue: sequelize.NOW },
        },
        {
            sequelize,
            modelName: "Artist",
        }
    );
    return Artist;
};
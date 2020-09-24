"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Interactions_by_song extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: "userId",
            });
            this.belongsTo(models.User, {
                foreignKey: "songId",
            });
        }
    }
    Interactions_by_song.init(
        {
            userId: { type: DataTypes.INTEGER, allowNull: false },
            songId: { type: DataTypes.INTEGER, allowNull: false },
            isLiked: { type: DataTypes.BOOLEAN, allowNull: false },
            playCount: { type: DataTypes.INTEGER, allowNull: false },
        },
        {
            sequelize,
            modelName: "Interactions_by_song",
        }
    );
    return Interactions_by_song;
};

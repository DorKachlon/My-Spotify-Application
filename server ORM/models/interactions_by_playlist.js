"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Interactions_by_playlist extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, {
                foreignKey: "userId",
            });
            this.belongsTo(models.Playlist, {
                foreignKey: "playlistId",
            });
        }
    }
    Interactions_by_playlist.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            playlistId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            isLiked: { type: DataTypes.BOOLEAN, allowNull: false },
            playCount: { type: DataTypes.INTEGER, allowNull: false },
        },
        {
            sequelize,
            modelName: "Interactions_by_playlist",
        }
    );
    return Interactions_by_playlist;
};

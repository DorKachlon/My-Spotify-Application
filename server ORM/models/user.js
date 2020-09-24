"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.User_song,{
                foreignKey:"userId"
            })
        }
    }
    User.init(
        {
            name: { type: DataTypes.STRING, allowNull: false },
            email: { type: DataTypes.STRING, allowNull: false },
            password: { type: DataTypes.STRING, allowNull: false },
            isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
            preferenced: { type: DataTypes.JSON, allowNull: false },
            rememberToken: { type: DataTypes.BOOLEAN, allowNull: false },
            createdAt: { type: DataTypes.DATA, defaultValue: sequelize.NOW },
            uploadAt: { type: DataTypes.DATA, defaultValue: sequelize.NOW },
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};

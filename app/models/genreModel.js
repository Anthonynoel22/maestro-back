import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";

class Genre extends Model {}

Genre.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        }
    },
    {
        sequelize,
        modelName: "Genre",
        tableName: "genre",
        timestamps: true,
    }
);

export default Genre;
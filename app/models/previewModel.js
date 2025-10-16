import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";

class Preview extends Model {}

Preview.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        },
        isStar: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: "Preview",
        tableName: "preview",
        timestamps: true,
    }
);

export default Preview;
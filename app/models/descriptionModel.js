import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";


class Description extends Model {}

Description.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true },
        },
        image_link: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { notEmpty: true },
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: { notEmpty: true },
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: true,          
        },
    },
    {
        sequelize,
        modelName: "Description",
        tableName: "description",
        timestamps: true,
    }
);

export default Description;

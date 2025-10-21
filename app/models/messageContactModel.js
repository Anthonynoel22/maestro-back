import { DataTypes, Model } from "sequelize";
import sequelize from "../db/database.js";

class MessageContact extends Model {}

MessageContact.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        mail: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },

        message: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        status: {
            type: DataTypes.STRING(200),
            defaultValue: "non lu",
        }
    },

    {
        sequelize,
        modelName: "MessageContact",
        tableName: "messageContact",
        timestamps: true,
    }
);
export default MessageContact;

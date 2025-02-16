import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

export const FlashCard = sequelize.define('FlashCard', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    german_word: {
        type: DataTypes.STRING,
        allowNull: false
    },
    spanish_word: {
        type: DataTypes.STRING
    },
    article: {
        type: DataTypes.ENUM('der', 'die','das')
    }
}, {
    timestamps: false
})

     
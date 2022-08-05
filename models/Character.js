const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        },
        height: {
            type: DataTypes.INTEGER,
        },
        weight: {
            type: DataTypes.INTEGER,  
        },
        race: {
            type: DataTypes.STRING,
        },
        alignment: {
            type: DataTypes.STRING,
        },
        class: {
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.INTEGER,
        },
        hair: {
            type: DataTypes.STRING,
        },
        eyes: {
            type: DataTypes.STRING,
        },
        relationships: {
            type: DataTypes.STRING,
        },
        background: {
            type: DataTypes.STRING,
        },
        personality_traits: {
            type: DataTypes.STRING,
        },
        ideals: {
            type: DataTypes.STRING,
        },
        flaws: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'character'
    }
);

module.exports = Character;
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
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true

        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true  
        },
        race: {
            type: DataTypes.STRING,
            allowNull: true
        },
        alignment: {
            type: DataTypes.STRING,
            allowNull: true
        },
        class: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        hair: {
            type: DataTypes.STRING,
            allowNull: true
        },
        eyes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        relationships: {
            type: DataTypes.STRING,
            allowNull: true
        },
        background: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        personality_traits: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ideals: {
            type: DataTypes.STRING,
            allowNull: true
        },
        flaws: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
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
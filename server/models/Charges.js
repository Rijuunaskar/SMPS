'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Charges extends Model {
        static associate(models) {
            // Define associations here if needed
            // For example: Charges.belongsTo(models.Document);
        }
    }

    Charges.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fileId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        otherChargesDcla: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        otherChargesPol1: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        otherChargesFauc: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        otherChargesEnhc: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        otherChargesGst: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        deletedBy: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Charges',
        tableName: 'charges',
        timestamps: true,
        paranoid: true, // For soft delete
    });

    return Charges;
};

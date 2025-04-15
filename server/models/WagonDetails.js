'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class WagonDetails extends Model {
        static associate(models) {
            // define association here if needed
        }
    }
    WagonDetails.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        fileId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        srNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        owningRailwayParty: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        wagoNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        cc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        tare: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        noOfArticle: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        commodityCode: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue: 0
        },
        grossWt: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        dipMeasurements: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        dipWt: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        permissibleCc: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        overWt: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        overWtNormalRate: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        overWtPunitiveRate: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        chargeableWt: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        createdBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        updatedBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        deletedBy: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        }
    },
        {
            sequelize,
            tableName: 'wagon_details',
            timestamps: true,
            paranoid: true
        }
    );
    return WagonDetails;
};

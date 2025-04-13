'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate(models) {
      // define association here if needed
    }
  }
  Table.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fieldName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fieldValue: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    rowNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    docType: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    }
  }, {
    sequelize,
    modelName: 'Table',
    paranoid: true, // Enables soft delete by using deletedAt field
    timestamps: true // This ensures createdAt, updatedAt are automatically managed
  });

  return Table;
};

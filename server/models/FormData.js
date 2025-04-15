'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FormData extends Model {
    static associate(models) {
      // define association here if needed
    }
  }
  FormData.init({
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
    fileId: {
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
    tableName: 'form_data',
    paranoid: true, // Enables soft delete by using deletedAt field
    timestamps: true // This ensures createdAt, updatedAt are automatically managed
  });

  return FormData;
};

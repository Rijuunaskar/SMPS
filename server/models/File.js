'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate(models) {
      // define association here if needed
    }
  }
  File.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER
    },
    updatedBy: {
      type: DataTypes.INTEGER
    },
    deletedBy: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'File',
    paranoid: true,
    timestamps: true
  });

  return File;
};

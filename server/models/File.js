const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate(models) {
      File.hasMany(models.FormData, {
        foreignKey: 'fileId',
        as: 'formData'
      });
      File.hasMany(models.WagonDetails, {
        foreignKey: 'fileId',
        as: 'wagonDetails'
      });
      File.hasMany(models.Charges, {
        foreignKey: 'fileId',
        as: 'charges'
      });
    }
  }
  File.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    fileName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    docType:{
      type: DataTypes.INTEGER,
      allowNull : false
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
    tableName: 'files',
    paranoid: true,
    timestamps: true
  });

  return File;
};

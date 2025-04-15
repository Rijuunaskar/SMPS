'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wagon_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fileId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      srNo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      owningRailwayParty: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      wagoNo: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      cc: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      tare: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      noOfArticle: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      commodityCode: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0
      },
      grossWt: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      dipMeasurements: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      dipWt: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      permissibleCc: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      overWt: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      overWtNormalRate: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      overWtPunitiveRate: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      chargeableWt: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      deletedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
    await queryInterface.addConstraint('wagon_details', {
      fields: ['srNo', 'fileId'],
      type: 'unique',
      name: 'unique_srno_docid_constraint'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('wagon_details');
  }
};

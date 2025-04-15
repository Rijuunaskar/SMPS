'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('charges', {
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
      otherChargesDcla: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      otherChargesPol1: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      otherChargesFauc: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      otherChargesEnhc: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      otherChargesGst: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      deletedBy: {
        type: Sequelize.INTEGER,
        allowNull: true
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('charges');
  }
};

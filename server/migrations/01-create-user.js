'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING(255),
        allowNull: true,
        field: 'last_name'
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        field: 'email'
      },
      role: {
        type: Sequelize.ENUM('admin', 'user')
      },
      passwordHash: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: true
        },
        field: 'password_hash'
      },
      password: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true
        }      },
      last_login: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
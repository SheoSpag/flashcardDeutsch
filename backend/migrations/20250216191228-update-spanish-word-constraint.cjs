'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('FlashCards', 'spanish_word', {
      type: Sequelize.STRING(255),
      allowNull: false, // Ahora es obligatorio
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('FlashCards', 'spanish_word', {
      type: Sequelize.STRING(255),
      allowNull: true, // Revertimos para permitir NULL en caso de rollback
    });
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    await queryInterface.bulkInsert('Institutions', [

      {
        id: 1,
        name: "Harvard",
        owner_id: 1
      },
      {
        id: 2,
        name: "UTSA",
        owner_id: 2
      },
      {
        id: 3,
        name: "Stanford",
        owner_id: 3
      },
      {
        id: 4,
        name: 'University of Washington',
        owner_id: 4
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Institutions', null, {})
  }
};

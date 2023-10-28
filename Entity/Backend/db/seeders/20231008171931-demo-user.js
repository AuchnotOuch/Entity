'use strict';
const bcrypt = require("bcryptjs")
const faker = require("faker")
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

    // Generate an array of 3134 unique users
    const usersData = Array.from({ length: 334 }).map((_, index) => {
      const firstName = faker.name.firstName();
      const lastName = `${faker.name.lastName()}${index}`;
      const username = `${firstName}.${lastName}`;
      const email = `${username}@example.com`;

      return {
        username,
        email,
        firstName,
        lastName,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      };
    });

    await queryInterface.bulkInsert('Users', usersData, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};

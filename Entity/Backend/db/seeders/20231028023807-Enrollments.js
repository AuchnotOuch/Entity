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
    const totalUsers = 334;
    const totalInstitutions = 4;
    const usersPerInstitution = Math.floor(totalUsers / totalInstitutions);
    const remainder = totalUsers % totalInstitutions;

    let enrollments = [];
    let userId = 1;

    for (let institutionId = 1; institutionId <= totalInstitutions; institutionId++) {
      let institutionSize = (institutionId <= remainder) ? usersPerInstitution + 1 : usersPerInstitution;

      for (let j = 0; j < institutionSize; j++) {
        enrollments.push({
          institution_id: institutionId,
          user_id: userId++
        });
      }
    }

    await queryInterface.bulkInsert("Enrollments", enrollments, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Enrollments", null, {})
  }
};

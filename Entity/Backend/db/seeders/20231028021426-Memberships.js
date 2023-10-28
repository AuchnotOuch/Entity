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
    const totalGroups = 81;
    const usersPerGroup = Math.floor(totalUsers / totalGroups);
    const remainder = totalUsers % totalGroups;

    let memberships = [];
    let userId = 1;

    for (let groupId = 1; groupId <= totalGroups; groupId++) {
      let groupSize = (groupId <= remainder) ? usersPerGroup + 1 : usersPerGroup;

      for (let j = 0; j < groupSize; j++) {
        memberships.push({
          group_id: groupId,
          user_id: userId++
        });
      }
    }
    await queryInterface.bulkInsert("Memberships", memberships, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Memberships", null, {})
  }
};

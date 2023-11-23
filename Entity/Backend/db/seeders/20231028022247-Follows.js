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
     *
    */
    const totalUsers = 334;
    let followRelationships = [];
    let relationshipSet = new Set();

    // Helper function to generate a unique string for each relationship
    const generateRelationshipKey = (follower, followee) => `${follower}-${followee}`;

    // Ensure everyone has at least one follower and is following one user.
    for (let i = 1; i <= totalUsers; i++) {
      let followee = i % totalUsers + 1;
      followRelationships.push({
        user_id_follower: i,
        user_id_followee: followee
      });
      relationshipSet.add(generateRelationshipKey(i, followee));
    }

    // Let's create some additional random follow relationships for diversity.
    const additionalRelationships = totalUsers;

    for (let i = 0; i < additionalRelationships; i++) {
      let follower = Math.floor(Math.random() * totalUsers) + 1;
      let followee = Math.floor(Math.random() * totalUsers) + 1;

      // Ensure the follower is not following themselves and the relationship is unique.
      while (follower === followee || relationshipSet.has(generateRelationshipKey(follower, followee))) {
        follower = Math.floor(Math.random() * totalUsers) + 1;
        followee = Math.floor(Math.random() * totalUsers) + 1;
      }

      followRelationships.push({
        user_id_follower: follower,
        user_id_followee: followee
      });
      relationshipSet.add(generateRelationshipKey(follower, followee));
    }

    console.log(followRelationships);


    await queryInterface.bulkInsert('Follows', followRelationships, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Follows", null, {})
  }
};

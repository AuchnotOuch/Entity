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
    const groups = [


      {
        name: "African and African American Studies"
      },
      {
        name: "Anthropology"
      },
      {
        name: "Art, Film, Visual Studies"
      },
      {
        name: "Astrophysics"
      },
      {
        name: "Bioengineering"
      },
      {
        name: "Porcellian Club"
      },
      {
        name: "Biology"
      },
      {
        name: "Biomedical Engineering"
      },
      {
        name: "Business Administration and Management",
      },
      {
        name: "Chemical and Physical Biology"
      },
      {
        name: "Chemistry"
      },
      {
        name: "Chemistry and Physics"
      },
      {
        name: "Classics"
      },
      {
        name: "Comparative Literature"
      },
      {
        name: "Comparative Study of Religion"
      },
      {
        name: ""
      },
      {
        name: "Computer Science"
      },
      {
        name: "Earth and Planetary Sciences"
      },
      {
        name: "East Asian Studies"
      },
      {
        name: "Economics"
      },
      {
        name: "Electrical Engineering"
      },
      {
        name: "English"
      },
      {
        name: "Environmental Science and Engineering"
      },
      {
        name: "Astronomy Club"
      },
      {
        name: "Film Society"
      },
      {
        name: "LGBTQ+ Alliance"
      },
      {
        name: "Philosophy Club"
      },
      {
        name: "Sports Management Club"
      },
      {
        name: "Archaeology Society"
      },
      {
        name: "Business Club"
      },
      {
        name: "Women in STEM"
      },
      {
        name: "Journalism Club"
      },
      {
        name: "A Cappella Group"
      },
      {
        name: "Meditation & Yoga Club"
      },
      {
        name: "International Students Association"
      },
      {
        name: "Outdoor Adventure Club"
      },
      {
        name: "Gaming Club"
      },
      {
        name: "Culinary Arts Club"
      },
      {
        name: "Astronomy Club"
      },
      {
        name: "Film Society"
      },
      {
        name: "LGBTQ+ Alliance"
      },
      {
        name: "Philosophy Club"
      },
      {
        name: "Sports Management Club"
      },
      {
        name: "Archaeology Society"
      },
      {
        name: "Business Club"
      },
      {
        name: "Women in STEM"
      },
      {
        name: "Journalism Club"
      },
      {
        name: "A Cappella Group"
      },
      {
        name: "Meditation & Yoga Club"
      },
      {
        name: "International Students Association"
      },
      {
        name: "Outdoor Adventure Club"
      },
      {
        name: "Gaming Club"
      },
      {
        name: "Culinary Arts Club"
      },
      {
        name: "Debate Club"
      },
      {
        name: "Math Club"
      },
      {
        name: "Student Body Council"
      },
      {
        name: "Chess Club"
      },
      {
        name: "Drama Society"
      },
      {
        name: "Literature Club"
      },
      {
        name: "Science Club"
      },
      {
        name: "Robotics Team"
      },
      {
        name: "Model United Nations"
      },
      {
        name: "Dance Troupe"
      },
      {
        name: "Music Band"
      },
      {
        name: "Photography Club"
      },
      {
        name: "Environmental Club"
      },
      {
        name: "Entrepreneurship Club"
      },
      {
        name: "Anime Club"
      },
      {
        name: "Coding Club"
      },
      {
        name: "Art Society"
      },
      {
        name: "History Club"
      },
      {
        name: "Language & Culture Club"
      },
      {
        name: "Volunteer & Outreach Group"
      },
      {
        name: "Mathematics"
      },
      {
        name: "History"
      },
      {
        name: "Psychology"
      },
      {
        name: "Sociology"
      },
      {
        name: "Philosophy"
      },
      {
        name: "Political Science"
      },
      {
        name: "Literature"
      },
      {
        name: "Environmental Science"
      },
      {
        name: "Geography"
      },
      {
        name: "Anthropology"
      },
      {
        name: "Economics"
      },
      {
        name: "Business Administration"
      },
      {
        name: "Music"
      },
      {
        name: "Theater Arts"
      },
      {
        name: "Fine Arts"
      },
      {
        name: "Architecture"
      },
      {
        name: "Civil Engineering"
      },
      {
        name: "Mechanical Engineering"
      },
      {
        name: "Electrical Engineering"
      },
      {
        name: "Nursing"
      },
      {
        name: "Medicine"
      },
      {
        name: "Law"
      },
      {
        name: "Journalism"
      },
      {
        name: "Education"
      }

    ]

    await queryInterface.bulkInsert('Groups', groups, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     *
     */
    await queryInterface.bulkDelete('Groups', null, {});
  }
};

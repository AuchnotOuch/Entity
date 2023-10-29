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
        name: "African and African American Studies",
        owner_id: 1
      },
      {
        name: "Anthropology",
        owner_id: 2
      },
      {
        name: "Art, Film, Visual Studies",
        owner_id: 3
      },
      {
        name: "Astrophysics",
        owner_id: 4
      },
      {
        name: "Bioengineering",
        owner_id: 5,
      },
      {
        name: "Porcellian Club",
        owner_id: 6
      },
      {
        name: "Biology",
        owner_id: 7
      },
      {
        name: "Biomedical Engineering",
        owner_id: 8
      },
      {
        name: "Business Administration and Management",
        owner_id: 9
      },
      {
        name: "Chemical and Physical Biology",
        owner_id: 10
      },
      {
        name: "Chemistry",
        owner_id: 11
      },
      {
        name: "Chemistry and Physics",
        owner_id: 12
      },
      {
        name: "Classics",
        owner_id: 13
      },
      {
        name: "Comparative Literature",
        owner_id: 14
      },
      {
        name: "Comparative Study of Religion",
        owner_id: 15
      },
      {
        name: "???",
        owner_id: 16
      },
      {
        name: "Computer Science",
        owner_id: 17
      },
      {
        name: "Earth and Planetary Sciences",
        owner_id: 17
      },
      {
        name: "East Asian Studies",
        owner_id: 18
      },
      {
        name: "Economics",
        owner_id: 19
      },
      {
        name: "Electrical Engineering",
        owner_id: 20
      },
      {
        name: "English",
        owner_id: 21
      },
      {
        name: "Environmental Science and Engineering",
        owner_id: 22
      },
      {
        name: "Astronomy Club",
        owner_id: 23
      },
      {
        name: "Film Society",
        owner_id: 24
      },
      {
        name: "LGBTQ+ Alliance",
        owner_id: 25
      },
      {
        name: "Philosophy Club",
        owner_id: 26
      },
      {
        name: "Sports Management Club",
        owner_id: 27
      },
      {
        name: "Archaeology Society",
        owner_id: 28,
      },
      {
        name: "Business Club",
        owner_id: 29
      },
      {
        name: "Women in STEM",
        owner_id: 30
      },
      {
        name: "Journalism Club",
        owner_id: 31
      },
      {
        name: "A Cappella Group",
        owner_id: 32
      },
      {
        name: "Meditation & Yoga Club",
        owner_id: 33
      },
      {
        name: "International Students Association",
        owner_id: 34
      },
      {
        name: "Outdoor Adventure Club",
        owner_id: 35
      },
      {
        name: "Gaming Club",
        owner_id: 36
      },
      {
        name: "Culinary Arts Club",
        owner_id: 37
      },
      {
        name: "Astronomy Club",
        owner_id: 38
      },
      {
        name: "Film Society",
        owner_id: 39
      },
      {
        name: "LGBTQ+ Alliance",
        owner_id: 40
      },
      {
        name: "Philosophy Club",
        owner_id: 41
      },
      {
        name: "Sports Management Club",
        owner_id: 42
      },
      {
        name: "Archaeology Society",
        owner_id: 43
      },
      {
        name: "Business Club",
        owner_id: 44
      },
      {
        name: "Women in STEM",
        owner_id: 45
      },
      {
        name: "Journalism Club",
        owner_id: 46
      },
      {
        name: "A Cappella Group",
        owner_id: 47
      },
      {
        name: "Meditation & Yoga Club",
        owner_id: 48
      },
      {
        name: "International Students Association",
        owner_id: 49
      },
      {
        name: "Outdoor Adventure Club",
        owner_id: 50
      },
      {
        name: "Gaming Club",
        owner_id: 51
      },
      {
        name: "Culinary Arts Club",
        owner_id: 52
      },
      {
        name: "Debate Club",
        owner_id: 53
      },
      {
        name: "Math Club",
        owner_id: 54
      },
      {
        name: "Student Body Council",
        owner_id: 55
      },
      {
        name: "Chess Club",
        owner_id: 56
      },
      {
        name: "Drama Society",
        owner_id: 57
      },
      {
        name: "Literature Club",
        owner_id: 58
      },
      {
        name: "Science Club",
        owner_id: 59
      },
      {
        name: "Robotics Team",
        owner_id: 60
      },
      {
        name: "Model United Nations",
        owner_id: 61
      },
      {
        name: "Dance Troupe",
        owner_id: 62
      },
      {
        name: "Music Band",
        owner_id: 63
      },
      {
        name: "Photography Club",
        owner_id: 64
      },
      {
        name: "Environmental Club",
        owner_id: 65
      },
      {
        name: "Entrepreneurship Club",
        owner_id: 66
      },
      {
        name: "Anime Club",
        owner_id: 67
      },
      {
        name: "Coding Club",
        owner_id: 68
      },
      {
        name: "Art Society",
        owner_id: 69
      },
      {
        name: "History Club",
        owner_id: 70
      },
      {
        name: "Language & Culture Club",
        owner_id: 71
      },
      {
        name: "Volunteer & Outreach Group",
        owner_id: 72
      },
      {
        name: "Mathematics",
        owner_id: 73
      },
      {
        name: "History",
        owner_id: 74
      },
      {
        name: "Psychology",
        owner_id: 75
      },
      {
        name: "Sociology",
        owner_id: 76
      },
      {
        name: "Philosophy",
        owner_id: 77
      },
      {
        name: "Political Science",
        owner_id: 78
      },
      {
        name: "Literature",
        owner_id: 79
      },
      {
        name: "Environmental Science",
        owner_id: 80
      },
      {
        name: "Geography",
        owner_id: 81
      },
      {
        name: "Anthropology",
        owner_id: 82
      },
      {
        name: "Economics",
        owner_id: 83
      },
      {
        name: "Business Administration",
        owner_id: 84
      },
      {
        name: "Music",
        owner_id: 85
      },
      {
        name: "Theater Arts",
        owner_id: 86
      },
      {
        name: "Fine Arts",
        owner_id: 87
      },
      {
        name: "Architecture",
        owner_id: 88
      },
      {
        name: "Civil Engineering",
        owner_id: 89
      },
      {
        name: "Mechanical Engineering",
        owner_id: 90
      },
      {
        name: "Electrical Engineering",
        owner_id: 91
      },
      {
        name: "Nursing",
        owner_id: 92
      },
      {
        name: "Medicine",
        owner_id: 93
      },
      {
        name: "Law",
        owner_id: 94
      },
      {
        name: "Journalism",
        owner_id: 95
      },
      {
        name: "Education",
        owner_id: 96
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

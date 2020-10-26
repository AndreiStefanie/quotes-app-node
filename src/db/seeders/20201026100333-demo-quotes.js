'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Quotes',
      [
        {
          text: 'Be yourself; everyone else is already taken.',
          author: 'Oscar Wilde',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'So many books, so little time.',
          author: 'Frank Zappa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Be the change that you wish to see in the world.',
          author: 'Mahatma Gandhi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text:
            'Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!',
          author: 'Billy Connolly',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

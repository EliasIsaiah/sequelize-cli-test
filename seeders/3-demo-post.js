'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('posts',[{
     title: 'test post',
     body: 'Mouse purr as loud as possible, be the most annoying cat that you can',
     image: 'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-4-e1503516670834.jpg',
     rating: '8',
     food: 'Lasagna',
     UserId: '1',
     RestaurantId: '1',
     createdAt: new Date(),
     updatedAt: new Date()
   }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    return queryInterface.bulkDelete('posts', null, {});
  }
};
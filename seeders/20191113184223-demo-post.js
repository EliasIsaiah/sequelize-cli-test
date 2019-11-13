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
     body: 'Mouse purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Furrier and even more furrier hairball at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in or fight an alligator and win and hide at bottom of staircase to trip human but wack the mini furry mouse. Dead stare with ears cocked the door is opening!',
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
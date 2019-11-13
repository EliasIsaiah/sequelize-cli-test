'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
      'posts',
      'UserId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    ).then(() => {
      // post hasOne Restaurant
      return queryInterface.addColumn(
        'posts',
        'RestaurantId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'restaurants',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      ).then(() => {
        return queryInterface.addColumn(
          'restaurants',
          'PostId',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'posts',
              key: 'id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
          }
        );
      });
    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'posts',
      'UserId'
    )
      .then(() => {
        return queryInterface.removeColumn(
          'posts',
          'RestaurantId'
        );
      })
      .then(() => {
        return queryInterface.removeColumn(
          'restaurants',
          'PostId'
        );
      });
  }
};

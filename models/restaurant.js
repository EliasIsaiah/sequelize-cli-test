'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define('restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  restaurant.associate = function(models) {
    // associations can be defined here
    restaurant.hasMany(models.post);
  };
  return restaurant;
};
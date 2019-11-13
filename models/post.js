'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    image: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    food: DataTypes.STRING
  }, {});
  post.associate = function(models) {
    post.belongsTo(models.user);
    post.hasOne(models.restaurant);
  };
  return post;
};
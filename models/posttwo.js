'use strict';
module.exports = (sequelize, DataTypes) => {
  const postTwo = sequelize.define('postTwo', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {});
  postTwo.associate = function(models) {
    // associations can be defined here
  };
  return postTwo;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    // id: {
    //   type: DataTypes.UUID,
    //   primaryKey: true,
    //   defaultValue: DataTypes.UUIDV4,
    //   allowNull: false,
    //   autoIncrement: false,
    // },
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {});
  post.associate = function (models) {
    post.belongsTo(models.User)
  };
  return post;
};
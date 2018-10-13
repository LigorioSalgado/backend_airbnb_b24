'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: {type:DataTypes.ENUM,values:["M","F"]},
    birth_date: DataTypes.DATE,
    paypal_id: DataTypes.STRING,
    type:{type:DataTypes.ENUM,values:["guest","owner","both"] }
  }, {});
  Users.associate = function(models) {
    Users.hasMany(models.Houses);
    Users.hasMany(models.Bookings);
  };
  return Users;
};
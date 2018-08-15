module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    }
  });
  return User;
};
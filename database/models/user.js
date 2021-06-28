const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      defaultScope: {
        rawAttributes: { exclude: ['password'] },
      },
    },
  );

  User.beforeCreate(async (user) => {
    user.password = await user.generatePasswordHash();
  });
  User.prototype.generatePasswordHash = function () {
    if (this.password) {
      return bcrypt.hash(this.password, 10);
    }
  };
  User.associate = function (models) {
    // associations can be defined here
    // User.hasMany(models.sneakers_list, { foreignKey: 'userId', as: 'sneakers_list' });
    User.hasMany(models.Sneakers_list);
  };
  return User;
};
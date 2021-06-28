module.exports = (sequelize, DataTypes) => {
  const Sneakers_list = sequelize.define(
    'Sneakers_list',
    {
      name: DataTypes.STRING,
      sneakers_sku: DataTypes.JSON,
      userId: DataTypes.INTEGER
    },
    {},
  );
  Sneakers_list.associate = function(models) {
    // Sneakers_list.belongsTo(models.User, { foreignKey: 'userId', as: 'owner' });
    Sneakers_list.belongsTo(models.User);
  }
  return Sneakers_list;
};
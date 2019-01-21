module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      is_deleted: DataTypes.BOOLEAN,
    },
    {},
  );
  // eslint-disable-next-line func-names
  // eslint-disable-next-line no-unused-vars
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};

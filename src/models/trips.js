module.exports = (sequelize, DataTypes) => {
  const trips = sequelize.define(
    'trips',
    {
      title: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      payout: DataTypes.DOUBLE,
      saving_share: DataTypes.DOUBLE,
      budget: DataTypes.DOUBLE,
      user_id: DataTypes.INTEGER,
    },
    {},
  );
  // eslint-disable-next-line func-names
  // eslint-disable-next-line no-unused-vars
  trips.associate = function(models) {
    // associations can be defined here
  };
  return trips;
};

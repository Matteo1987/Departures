'use strict';

module.exports = (sequelize, DataType) => {
  let Departure = sequelize.define('Departure', {
    // id missing because Sequelize adds it by default
    scheduledTime:  DataType.TIME,
    expectedTime: DataType.TIME,
    nFlight: DataType.STRING(10),
    company: DataType.STRING(20),
    destination: DataType.STRING(50),
    gate: DataType.STRING(4),
    flightStatus: DataType.STRING(10)
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'departures'
  });

  // Association to other models (foreign keys)
  Departure.associate = function (models) {

  };

  return Departure;
};

const db = require('../dbConfig');

const getMeasurements = () => db('measurements');

const getMeasurementsById = id => db('measurements').where({ id });

const addMeasruement = measurement =>
  db('measurements')
    .insert(measurement)
    .then(([id]) => getMeasurementsById(id));

const removeMeasurement = id =>
  db('measurements')
    .where({ id })
    .del();

const clearMeasurements = db('measurements').del();

module.exports = {
  getMeasurements,
  getMeasurementsById,
  addMeasruement,
  removeMeasurement,
  clearMeasurements,
};

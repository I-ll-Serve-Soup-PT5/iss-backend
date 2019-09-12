const db = require('../dbConfig');

const getMeasurements = () => db('measurements');

const getMeasurementsById = id => db('measurements').where({ id }).first();

const getByType = type => db('measurements').where({ type }).first();

const addMeasurement = measurement =>
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
  addMeasurement,
  removeMeasurement,
  clearMeasurements,
  getByType
};

const db = require('../dbConfig');

const getMeasurements = () => db('measurements');

const getMeasurementsById = id => db('measurements').where({ id });

const addMeasruement = measurement =>
  db('measurements')
    .insert(measurement)
    .then(([id]) => getMeasurementsById(id));

const removeMeasruement = id =>
  db('measurements')
    .where({ id })
    .del();

module.exports = {
  getMeasurements,
  getMeasurementsById,
  addMeasruement,
  removeMeasruement,
};

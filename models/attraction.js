'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Attraction.init({
    name: DataTypes.STRING,
    min_height: DataTypes.INTEGER,
    max_height: DataTypes.INTEGER,
    length: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Attraction',
  });
  return Attraction;
};
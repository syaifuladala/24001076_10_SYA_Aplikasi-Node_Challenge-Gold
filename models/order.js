'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    user_id: DataTypes.BIGINT,
    item_id: DataTypes.BIGINT,
    status: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders',
  });
  return Order;
};
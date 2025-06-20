const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Relacionamento Usuário 1:N Pedidos
// onDelete 'CASCADE': Se um usuário for deletado, todos os seus pedidos associados serão deletados.
// hooks: true: Garante que os hooks de modelo (como beforeDestroy/afterDestroy) sejam executados para os pedidos deletados.
User.hasMany(Order, { foreignKey: 'userId', onDelete: 'CASCADE', hooks: true }); // Adicione foreignKey aqui
Order.belongsTo(User, { foreignKey: 'userId' }); // Adicione foreignKey aqui

module.exports = Order;

const Sequelize = require('sequelize')

// Conexão com banco Mysql
const sequelize = new Sequelize('postapp', 'user_test', 'T&st12345678', {
    host: "localhost",
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
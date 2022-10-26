const Sequelize = require('sequelize')
const dbConfig = new Sequelize('cinema', 'root', 'password', {
    dialect: "mysql",
    host: 'localhost'
})

module.exports = dbConfig   
const dbConfig = require('../Config/index')
const Sequelize = require('sequelize')

const RoomTable = dbConfig.define('Salas',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        primaryKey: true
    },
    sala: {
        type: Sequelize.STRING,
        allowNull: false
    },
    capacidade: {
        type: Sequelize.INTEGER,
        allowNull: false   
    },
    horario: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = RoomTable
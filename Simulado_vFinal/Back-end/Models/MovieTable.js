const dbConfig = require('../Config/index')
const Sequelize = require('sequelize')

const MovieTable = dbConfig.define('Filmes',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },  
    duracao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sinopse: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = MovieTable
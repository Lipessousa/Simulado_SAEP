const RoomTable = require('../Models/RoomTable')
const MovieTable = require('../Models/MovieTable')

class Controller{
    static async CreateTables(req,res){
        await MovieTable.sync({force:true})
        await Controller.Tables();
        await RoomTable.sync({force:true})
        res.status(200).json({msg: "Banco criado"})
    }

    static async Tables(req, res){
        MovieTable.hasMany(RoomTable,{
            constraint: true
        })
        RoomTable.belongsTo(MovieTable,{
            constraint: true
        })
    } 
}

module.exports = Controller
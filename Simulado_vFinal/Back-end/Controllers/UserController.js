const RoomTable = require('../Models/RoomTable')
const MovieTable = require('../Models/MovieTable')

class UserController{
    static async ReadRoom(req,res){
        const resRoom = await RoomTable.findAll()
        res.status(200).json({resRoom})
    }

    static async ReadMovie(req,res){
        const resMovie = await MovieTable.findAll()
        res.status(200).json({resMovie})
    }

}

module.exports = UserController
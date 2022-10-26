const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/UserController')
const Controller =  require('../Controllers/Controller')

router.get('/migration', Controller.CreateTables)

router.get('/room', UserController.ReadRoom)

router.get('/movie', UserController.ReadMovie)

module.exports = router
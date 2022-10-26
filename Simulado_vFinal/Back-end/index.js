const express = require('express')
const app = express()
const router = require('./Routes/router')
const cors = require('cors')()

app.use(cors)
app.use(express.json())

app.use(router)

app.listen(3000, ()=> {
    console.log('Running server')
})
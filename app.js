const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const environment = process.env.DB_ENV || "development"

//global middleware
app.use(helmet())
app.use(cors())
app.use(express.json())

//motd
require('./motd/motd')

//config
const PORT = process.env.PORT || 4242
const routes = require('./routes')
routes(app)

//server
app.listen(PORT, () => {
    console.clear()
    console.log(motd(PORT))
})
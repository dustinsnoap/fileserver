const db = require('../config/db')

module.exports = app => {
    app.get('/ping', ping)
    app.post('/register', register)
    app.post('/getuser', getUser)
}

const ping = (req, res) => {
    res.status(200).send('pong')
}

const register = async (req, res) => {
    try {
        const uid = req.body.uid
        const username = req.body.username
        const password = req.body.password
        const userNum = await db('users').insert({'uid': uid, 'username': username, 'password': password})
        if(userNum) {
            const user = await db('users').where({'username': req.body.username})
            res.status(201).json({message: `new user added`, user: user[0]})
        } else {
            res.status(404).json({message: `user couldn't be added`})
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: `user couldn't be added`, err})
    }
}

const getUser = async (req, res) => {
    try {
        const user = await db('users').where({'username': req.body.username})
        if(user) res.status(200).json(user)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: `user couldn't be found`, err})
    }
}
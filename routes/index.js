module.exports = app => {
    app.get('/ping', ping)
}

const ping = (req, res) => {
    res.status(200).send('pong')
}
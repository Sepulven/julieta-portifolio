const express = require('express')
const path = require('path')
const app = express()

const router = require('./routes/mainRoute.js')

const PORT = 3000

app.use(express.static(path.join(__dirname, 'statics')))

app.use(router)

app.use((req, res, next) => { res.sendFile(path.join(__dirname, '/statics/error.html')) });

app.listen(PORT, () => { console.log(`Already started at localhost:${PORT}`) })
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5858

app.use(express.static('client'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/home.html')))

app.listen(port, () => console.log(`Server on ${port} is running away!`))
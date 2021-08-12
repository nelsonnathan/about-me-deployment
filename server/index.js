const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5858

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../aboutMe.html')))

app.listen(port, () => console.log(`Server on ${port} is running away!`))
const express = require('express')
const app = express()
const port = 5000
const data = require('./data/data.json')

app.get('/', (req, res) => {
  res.send('server running for assignment 10')
})
app.get('/data', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
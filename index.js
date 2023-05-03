const express = require('express')
const app = express()
const port = 5000
const data = require('./data/data.json')

app.get('/', (req, res) => {
  res.send('server running for assignment 10')
})

app.get('/alldata', (req, res) => {
  res.send(data)
})
app.get('/alldata/:id', (req, res) => {
  const id = req.params.id
  res.send(data.find(data => data.chef_id == id))
  console.log(id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
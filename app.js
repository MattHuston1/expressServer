const express = require('express')
const app = express()
const port = 8000
const knex = require('knex')
const queries = require('./queries')

app.get('/', (request, response, next) => {
  queries.getAll().then(cats => response.json({cats}))
})

app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})
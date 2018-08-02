const database = require('./database-connection')

const getAll = () => {
  return database('cat_breeds').select('*')
}

module.exports = {
  getAll
}
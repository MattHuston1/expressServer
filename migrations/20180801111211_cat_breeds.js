
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cat_breeds', (cat) => {
    cat.increments()
    cat.text('breed')
    cat.integer('popularity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cat_breeds')
};

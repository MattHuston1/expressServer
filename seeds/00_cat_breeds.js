
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cat_breeds').del()
    .then(function () {
      // Inserts seed entries
      return knex('cat_breeds').insert([
        {breed: 'Tabby', popularity: '5'},
        {breed: 'Bengal', popularity: '10'},
        {breed: 'Siamese', popularity: '3'},
        {breed: 'Norwegian Forest Cat', popularity: '2'}
      ]);
    });
};

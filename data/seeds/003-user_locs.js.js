
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_locs').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_locs').insert([
        {
          destination_name:'Washington D.C.',
          address:'601 13th Street NW',
          lat: 38.8951 ,
          lng: -77.0364,
          city:'Washington D.C.',
          state: 'District of Columbia',
          notes:'Nice in the summertime',
          category: 'Capitol',
          user_id: '00ulthapbErVUwVJy4x6'

        }
      ]);
    });
};

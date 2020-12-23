
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trip_locs').del()
    .then(function () {
      // Inserts seed entries
      return knex('trip_locs').insert([
        {
          destination_name:'Marble 8 Steak House',
          address:'Petronas, Menara 3, Persiaran KLCC, Kuala Lumpur City Centre, 50088',
          lat:48.2525,
          lng:-88.8748,
          city:'Kuala Lumpur',
          state:'Malaysia',
          loc_notes:'Great food',
          trip_id:1
        }
      ]);
    });
};

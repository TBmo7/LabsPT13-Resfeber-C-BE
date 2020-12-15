
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_locs').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_locs').insert([
        {
          loc_coords:['38,8951','-77.0364'], //Coords will be an array in order of LAT, LON
          loc_name:'Washington DC',
          pinned: true,
          saved: false,
          user_id: 2
        }
      ]);
    });
};

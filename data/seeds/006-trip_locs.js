
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trip_locs').del()
    .then(function () {
      // Inserts seed entries
      return knex('trip_locs').insert([
        {id: 1, trip_loc_coords:'67, 55',loc_notes:'This is a note', type_id: 1}
      ]);
    });
};

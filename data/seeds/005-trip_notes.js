
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trip_notes').del()
    .then(function () {
      // Inserts seed entries
      return knex('trip_notes').insert([
        {id:1,num_notes:3,
          notes:[{"note":"We take what little we can"},{"note":"Through the walls"},{"note":"Did you see them coming?"}],
          user_id:2
        }
        
      ]);
    });
};

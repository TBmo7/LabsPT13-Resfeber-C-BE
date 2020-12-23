
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trips_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips_data').insert([
        {
          id:1,
          tripname:'Southwest Trip',
          start_date:'12222020',
          end_date:'01032021',
          overall_covid_score: 7,
          total_locations: 4,
          user_id: '00ulthapbErVUwVJy4x6'
        }
        
      ]);
    });
};

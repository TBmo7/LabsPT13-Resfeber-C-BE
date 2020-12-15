
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trips_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips_data').insert([
        {id: 1, tripname: 'Grand Canyon', start_date: '12/12/2020', end_date: '12/30/3030', overall_covid_score: '4.7', total_locations: '4', user_id: 2 }
        
      ]);
    });
};

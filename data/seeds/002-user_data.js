
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_data').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_data').insert([
        {user_name:'Yahzick Fairweather',
         status:'Single',
         address_1:'2020 Mountain Way',
         address_2:'APT 6774',
         carType:'Rezvani',
         budget:123456789,
         accommodationType:'Entire Place',
         id:2   
      }
      
      ]);
    });
};

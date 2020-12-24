//Correlates with trips from yen
exports.up = function(knex) {
  return knex.schema

  .createTable('trips_data',tbl =>{
      tbl.increments('id').notNullable().unique().primary();
      tbl.string('tripname').notNullable();
      tbl.string('start_date')
      tbl.string('end_date');
      tbl.string('overall_covid_score');
      tbl.integer('total_locations');
      tbl.string('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('profiles')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trips_data')
};

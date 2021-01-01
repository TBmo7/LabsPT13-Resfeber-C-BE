/**CORRELATES WITH ITEINERARY FROM YEN */
exports.up = function(knex) {
  return knex.schema

  .createTable('trip_locs', tbl =>{
      tbl.increments('id').notNullable().unique().primary();
      tbl.string('destination_name').notNullable();
      tbl.string('address').notNullable();
      tbl.float('lat').required();
      tbl.float('lng').required();
      tbl.string('city').required();
      tbl.string('state').required();
      tbl.string('category');
      tbl.string('loc_notes');
      tbl.integer('trip_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('trips_data')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trip_locs')
};

/**CORRELATES WITH ITEINERARY FROM YEN */
exports.up = function(knex) {
  return knex.schema

  .createTable('trip_locs', tbl =>{
      tbl.increments('id').notNullable().unique().primary();
      tbl.string('destination_name').notNullable();
      tbl.string('address').notNullable();
      tbl.float('lat').notNullable();
      tbl.float('lng').notNullable();
      tbl.string('city').notNullable();
      tbl.string('state').notNullable();
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

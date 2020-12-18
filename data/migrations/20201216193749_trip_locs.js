
exports.up = function(knex) {
  return knex.schema

  .createTable('trip_locs', tbl =>{
      tbl.increments('id').notNullable().unique().primary();
      tbl.string('trip_loc_coords').notNullable();
      tbl.string('loc_notes');
      tbl.integer('type_id'); //type Ids to be added later
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trip_locs')
};

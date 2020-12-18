
exports.up = function(knex) {
  return knex.schema

  .createTable('trip_notes',tbl =>{
      tbl.increments('id').notNullable().unique().primary();
      tbl.integer('num_notes');
      tbl.string('notes')
      tbl.integer('user_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('user_data')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trip_notes')
};

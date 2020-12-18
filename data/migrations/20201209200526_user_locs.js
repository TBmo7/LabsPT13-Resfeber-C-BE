

exports.up = (knex) => {
    return knex.schema
      //raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .createTable('user_locs', function (table) {
        table.increments('id');
        table.string('loc_coords').notNullable();
        table.string('loc_name').notNullable();
        table.boolean('pinned');
        table.boolean('saved');
        table.string('loc_notes');
        table.integer('type_id');
        table.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('user_data')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTableIfExists('user_locs');
  };
  
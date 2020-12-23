/** This was built before consulting with FE
 * This correlates with Pins from Yen
 * They expect
 * id: 2,
 * destination_name:"name",
 * category: Cafe
 * Address: address
 * Lat
 * Lng
 * city
 * state
 */

exports.up = (knex) => {
    return knex.schema
      //raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .createTable('user_locs', function (table) {
        table.increments('id').notNullable().unique().primary();
        table.string('destination_name').notNullable();
        table.string('address').notNullable();
        table.float('lat').notNullable();
        table.float('lng').notNullable();
        table.string('city').notNullable();
        table.string('state').notNullable();
        table.string('notes');
        table.string('category');
        table.string('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('profiles')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTableIfExists('user_locs');
  };
  
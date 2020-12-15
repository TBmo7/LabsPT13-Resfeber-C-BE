exports.up = (knex) => {
    return knex.schema
      //raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .createTable('user_data', function (table) {
        table.increments('id');
        table.string('user_name').notNullable(); //most likely unique
        table.string('status').notNullable();
        table.string('address_1').notNullable();
        table.string('address_2');
        table.string('carType');
        table.integer('budget');
        table.string('accommodationType');
      });
  };
    //NOTE 12/9/2020 : Will change ID to reference Profile ID if within best practices
  exports.down = (knex) => {
    return knex.schema.dropTableIfExists('user_data');
  };
  
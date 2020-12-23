exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('user_name').notNullable();
      table.string('avatarUrl');
      table.string('status').notNullable();
      table.string('address_1').notNullable();
      table.string('address_2');
      table.string('carType');
      table.integer('budget');
      table.string('accommodation_type');
      table.timestamps(true, true);
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};

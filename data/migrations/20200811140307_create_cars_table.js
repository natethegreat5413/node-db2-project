
exports.up = function(knex) {
  // id, vin, make, model, mileage, transmission, status
  return knex.schema.createTable('cars', tbl => {
      tbl.increments()
      tbl.integer("VIN").notNullable().unique()
      tbl.string("Make").notNullable()
      tbl.string("Model").notNullable()
      tbl.integer("Mileage").notNullable()
      tbl.string("Transmission")
      tbl.string("Status")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};

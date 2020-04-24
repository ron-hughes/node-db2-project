exports.up = async function(knex) {

    await knex.schema.createTable("car-dealer", (table) => {
        table.increments("id");
        table.string("vin").unique().notNull()
        table.text("make").notNull()
        table.text("model").notNull()
        table.integer("mileage").notNull()
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("car-dealer")
  
};

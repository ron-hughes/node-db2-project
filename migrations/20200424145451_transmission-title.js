
exports.up = async function(knex) {
  await knex.schema.alterTable("car-dealer", (table) => {
    table.text("transmission type")
    table.text("title status")
  })
};

exports.down = async function(knex) {
    await knex.schema.alterTable("car-dealer", (table) =>{
        table.dropColumn("transmission type");
        table.dropColumn("title status")
    })
  
};

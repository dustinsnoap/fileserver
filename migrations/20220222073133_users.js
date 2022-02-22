
exports.up = knex =>
    knex.schema.createTable('users', tbl => {
        tbl.string('uid')
            .primary()
            .unique()
            .notNullable()
        tbl.string('username')
            .unique()
            .notNullable()
        tbl.string('password')
            .notNullable()
        tbl.integer('bytesUsed')
        tbl.timestamps(true, true)
    })

exports.down = (knex, Promise) =>
    knex.schema.dropTableIfExists('users')

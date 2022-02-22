module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/buckets.db3'
    },
    useNullAsDefault: true
  }
}

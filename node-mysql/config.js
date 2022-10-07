const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "node_mysql",
    user: "root",
    password: "test123",
    database: "users",
  },
  listPerPage: 10,
};

module.exports = config;

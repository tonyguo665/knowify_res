const { Pool } = require("pg");

const client = new Pool({
  user: process.env.DB_USER || "asdfo2",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "reservation",
  password:process.env.DB_PASSWORD || "",
  port: process.env.DB_PORT || 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

const connect = () => {
  client
    .connect()
    .then(() => {
      console.log("App connected to Postgres!");
    })
    .catch((err) => {
      console.log(err);
    });
};
setTimeout(connect, 20000);

module.exports.client = client;

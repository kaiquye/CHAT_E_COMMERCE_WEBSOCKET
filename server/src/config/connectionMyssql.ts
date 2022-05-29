import "dotenv/config";
import connection from "knex";

let config = {
  client: "mysql",
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "batepapo_webosocket",
  },
  pool: { min: 0, max: 1, acquireTimeoutMillis: 6000000 },
};

export default connection(config);

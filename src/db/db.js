import { Pool } from "pg";
import { dbURL } from "../secret/secret.js";

// create a new pool instance database connection
// -> postgress -> // -> {user} -> {password} -> @ -> host:port -> {databaseName}

const pool = new Pool({
  connectionString: dbURL,
});
async function query(text, params) {
  const start = Date.now();
  try {
    const result = await pool.query(text, params);

    // execute the line ->
    const duration = Date.now() - start;
    console.log(`Executed query: ${{ text, duration, rows: result.rowCount }}`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default query;

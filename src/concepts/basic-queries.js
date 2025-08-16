import query from "../db/db.js";

export async function createUsersTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )
    `;

  try {
    await query(createTableQuery);
    console.log("User table created successfully");
  } catch (error) {
    console.log("[ERROR]: error in creating user table");
  }
}

export async function insertUser(username, email) {
  const insertUserQuery = `
    insert into users (username, email)
    values ($1, $2)
    returning * 
  `;
  try {
    const result = await query(insertUserQuery, [username, email]);
    console.log("user inserted successfully", result.rows[0]);

    return result.rows[0];
  } catch (error) {
    console.log("[ERROR] error in inserting user");
  }
}

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

export async function getAllUsers() {
  const getAllUsersQuery = `
    SELECT * FROM users
  `;
  try {
    const result = await query(getAllUsersQuery);
    console.log("All users fetched from users table");
    return result.rows;
  } catch (error) {
    console.log("[ERROR] error in fetching all users");
  }
}

export async function updateUserEmail(username, email) {
  const updateUserQuery = `
    UPDATE users 
    SET email = $2
    WHERE username = $1
    RETURNING *
  `;
  try {
    const result = await query(updateUserQuery, [username, email]);

    if (result.rows.length > 0) {
      console.log("User updated successfull!", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user found");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(username) {
  const deleteQuery = `
      DELETE FROM users 
      WHERE username = $1
      RETURNING * 
    `;
  try {
    const result = await query(deleteQuery, [username]);
    if (result.rows.length > 0) {
      console.log("User deleted sucessfully", result.rows[0]);
      return result.rows[0];
    } else {
      console.log("No user found");
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

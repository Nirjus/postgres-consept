import query from "../db/db.js";

export async function getUserWhere(condition) {
  const getUserQuery = `
     SELECT * FROM users
     WHERE ${condition}
    `;

  try {
    const result = await query(getUserQuery);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

export async function getSortedUsers(column, order = "ASC") {
  const sortedUsers = `
        SELECT * FROM users
        ORDER BY ${column} ${order}
    `;
  try {
    const result = await query(sortedUsers);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

export async function paginatedUsers(limit, offset) {
  const getPaginatedQuery = `
        SELECT * FROM users
        LIMIT $1 OFFSET $2
    `;
  try {
    const result = await query(getPaginatedQuery, [limit, offset]);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

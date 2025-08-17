import query from "../db/db.js";

export async function getUserWithPosts() {
  const getUsersWithPostsQuery = `
       SELECT users.id, users.username, posts.title
       FROM users
       INNER JOIN posts ON users.id = posts.user_id
    `;
  try {
    const result = await query(getUsersWithPostsQuery);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

export async function getAllUsersAndTherePosts() {
  const queryForPosts = `
    SELECT users.id, users.username, posts.title
    FROM users
    LEFT JOIN posts ON users.id = posts.user_id
  `;
  try {
    const result = await query(queryForPosts);
    return result.rows;
  } catch (error) {
    co;
  }
}

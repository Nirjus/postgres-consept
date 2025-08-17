import query from "../db/db.js";

export async function countPostById() {
  const countPostsByUserQuery = `
        SELECT users.username, COUNT(posts.id) as post_count
        FROM users
        LEFT JOIN posts ON users.id = posts.user_id
        GROUP BY users.id, users.username
    `;
  try {
    const result = await query(countPostsByUserQuery);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

export async function averagePostsPerUsers() {
  const averagePostsUserQuery = `
          SELECT AVG(post_count) as average_posts
          FROM(
            SELECT COUNT(posts.id) as post_count
            FROM users
            LEFT JOIN posts ON users.id = posts.user_id
            GROUP BY users.id
          ) as user_per_counts
        `;
  try {
    const result = await query(averagePostsUserQuery);
    return result.rows;
  } catch (error) {
    console.log(error);
  }
}

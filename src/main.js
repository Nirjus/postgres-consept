import { createUsersTable, insertUser } from "./concepts/basic-queries.js";

async function testBasicQuery() {
  try {
    // await createUsersTable();
    // await insertUser("Naman khel", "naman@gmail.com");
    // await insertUser("Bhusan jadav", "bhusan@gmail.com");
    // await insertUser("Kriti tripathi", "tripathikriti@gmail.com");
  } catch (error) {
    console.log(error);
  }
}

async function runallQueries() {
  await testBasicQuery();
}

runallQueries();

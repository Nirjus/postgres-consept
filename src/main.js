import {
  createUsersTable,
  deleteUser,
  getAllUsers,
  insertUser,
  updateUserEmail,
} from "./concepts/basic-queries.js";

async function testBasicQuery() {
  try {
    // await createUsersTable();
    // await insertUser("Naman khel", "naman@gmail.com");
    // await insertUser("Bhusan jadav", "bhusan@gmail.com");
    // await insertUser("Kriti tripathi", "tripathikriti@gmail.com");
    // const users = await getAllUsers();
    // console.log(users);
    // const updatedUser = await updateUserEmail(
    //   "Bhusan jadav",
    //   "jadavBhusan123@gmail.com"
    // );
    // console.log(updatedUser);
    const deletedUser = await deleteUser("Naman khel");
    console.log(deletedUser);
  } catch (error) {
    console.log(error);
  }
}

async function runallQueries() {
  await testBasicQuery();
}

runallQueries();

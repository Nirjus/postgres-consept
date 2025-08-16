import {
  createUsersTable,
  deleteUser,
  getAllUsers,
  insertUser,
  updateUserEmail,
} from "./concepts/basic-queries.js";
import {
  getSortedUsers,
  getUserWhere,
  paginatedUsers,
} from "./concepts/filtering-sorting.js";

async function testBasicQuery() {
  try {
    // await createUsersTable();
    // await insertUser("Naman khel", "naman@gmail.com");
    // await insertUser("Bhusan jadav", "bhusan@gmail.com");
    // await insertUser("Kriti tripathi", "tripathikriti@gmail.com");
    // await insertUser("Lokman kher", "lokman@gmail.com");
    // await insertUser("Priti sharma", "priti@gmail.com");
    // await insertUser("Vimal gupta", "guptavimal@gmail.com");
    // await insertUser("Rimi sen", "sen12rimi56@gmail.com");
    // const users = await getAllUsers();
    // console.log(users);
    // const updatedUser = await updateUserEmail(
    //   "Bhusan jadav",
    //   "jadavBhusan123@gmail.com"
    // );
    // console.log(updatedUser);
    // const deletedUser = await deleteUser("Naman khel");
    // console.log(deletedUser);
  } catch (error) {
    console.log(error);
  }
}

async function testFileQuerySorting() {
  try {
    //  get users with starting name
    // const zFilteredUsers = await getUserWhere("username LIKE 'K%'");
    // console.log(zFilteredUsers);
    // const sortedUser = await getSortedUsers("created_at", "DESC");
    // console.log(sortedUser);
    const paginatedUser = await paginatedUsers(2, 3);
    console.log("Paginated users", paginatedUser);
  } catch (error) {
    console.log("[ERROR]", error);
  }
}

async function runallQueries() {
  // await testBasicQuery();
  await testFileQuerySorting();
}

runallQueries();

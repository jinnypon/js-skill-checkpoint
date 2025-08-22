// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((usersDataArray) => usersDataArray.map((user) => user.name))
  .then((newUsers) => console.log(newUsers));

/*
// async-await
async function listNewUsers() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const usersDataArray = await data.json();
  const newUsers = await usersDataArray.map((user) => user.name);
  console.log(newUsers);
}
listNewUsers();
  */

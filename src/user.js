import bcrypt from "bcryptjs";

const users = [
  { id: 1, username: "user1", password: bcrypt.hashSync("1234", 10) },
  { id: 2, username: "user2", password: bcrypt.hashSync("1234", 10) },
  { id: 3, username: "user3", password: bcrypt.hashSync("1234", 10) }
];

export default users;
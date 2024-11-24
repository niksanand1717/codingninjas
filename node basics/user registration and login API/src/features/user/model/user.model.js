// Please don't change the pre-written code
// Import the necessary modules here

const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export const addUser = (data) => {
  // Write your code here
  users.push(new UserSchema(data.name, data.email, data.password));
  return users.slice(-1)[0];
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });

export const confirmLogin = (data) => {
  // Write your code here
  let matchedUser = users.find(
    (user) => user.email === data.email && user.password === data.password
  );

  if (matchedUser) {
    console.log("User matched:", matchedUser);
    return matchedUser;
  } else {
    console.log("User did not match");
    return undefined;
  }
};

export const getAllUsers = () => {
  return users;
};

const users = []; // In-memory storage for users

module.exports = {
  createUser: (name, email, password) => {
    const user = { id: Date.now().toString(), name, email, password };
    users.push(user);
    return user;
  },
  findUserByEmail: (email) => users.find((user) => user.email === email),
};

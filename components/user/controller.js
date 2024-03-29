const store = require("./store");

function addUser(name) {
  if (!name) {
    return Promise.reject("Invalid name");
  }

  const user = {
    name: name,
  };
  return store.add(user);
}

function listUsers() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addUser,
  listUsers,
};

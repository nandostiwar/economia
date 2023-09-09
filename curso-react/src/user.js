export const users = [
  { id: 1, name: "sebastian", password: "moreno000" },
  { id: 2, name: "economia", password: "digital" }
];

export const validation = (login, password) => {
  const user = users.find(user => login === user.name);
  if (typeof user !== 'undefined') {
    return user.password === password;
  }
  return false;
};


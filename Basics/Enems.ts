// ===================  Enums in Typescript  =========================

// ?   Enums in Typescript are commonly used when you want to represent a set of related values and choose one value from multiple values..

// user1 = login => normal User
// user2 = login => Admin User

//  Define Enums

enum Roles {
  user = "user",
  Admin = "Admin",
}

type LoginDetails = {
  name: string;
  email: string;
  password: number;
  role: Roles;
};

const user1: LoginDetails = {
  name: "Noman",
  email: "nk3618@gmail.com",
  password: 12345678,
  role: Roles.user,
};

const user2: LoginDetails = {
  name: "Ahemd",
  email: "nomi168@gmail.com",
  password: 12345678,
  role: Roles.Admin,
};

const isAdmin = (user: LoginDetails) => {
  const { name, email, role } = user;
  return role === "Admin"
    ? `name is ${name} and email is ${email} user is ${role}`
    : `name is ${name} and email is ${email} user is ${role}`;
};

console.log("user1", isAdmin(user1));
console.log("user2", isAdmin(user2));

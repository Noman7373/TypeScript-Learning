// ===================  Enums in Typescript  =========================
// ?   Enums in Typescript are commonly used when you want to represent a set of related values and choose one value from multiple values..
// user1 = login => normal User
// user2 = login => Admin User
//  Define Enums
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["Admin"] = "Admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "Noman",
    email: "nk3618@gmail.com",
    password: 12345678,
    role: Roles.user,
};
var user2 = {
    name: "Ahemd",
    email: "nomi168@gmail.com",
    password: 12345678,
    role: Roles.Admin,
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, role = user.role;
    return role === "Admin"
        ? "name is ".concat(name, " and email is ").concat(email, " user is ").concat(role)
        : "name is ".concat(name, " and email is ").concat(email, " user is ").concat(role);
};
console.log("user1", isAdmin(user1));
console.log("user2", isAdmin(user2));

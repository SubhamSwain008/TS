const name = "subham";
console.log("hello", name);
class User {
    id;
    email;
    name;
    city = "Bhubaneswar";
    wife = "none";
    constructor(email, name, id) {
        this.id = id;
        this.email = email;
        this.name = name;
    }
}
const subham = new User("email", 7, 70);
// subham.city="Bhubaneswar" // redline
// subham.wife;//gives red line
console.log(subham);
export {};
//# sourceMappingURL=index.js.map
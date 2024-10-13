let person = {
  firstName: "Salik",
  lastName: "Makhdoomi",

  // Getter
  get fullName() {
    return person.firstName + " " + person.lastName;
  },

  // Setter
  set fullName(value) {
    if (typeof value !== String) {
      throw "You must pass a string";
    }
    let name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  },
};

console.log(person.fullName);
person.fullName = "Burhan Bashir";
console.log(person.fullName);

try {
  person.fullName = true;
} catch (e) {
  // console.log(e);
  alert(e);
}

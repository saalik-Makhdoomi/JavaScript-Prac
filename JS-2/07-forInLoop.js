const Employee = {
  name: "NameofEmployee",
  age: 20,

  address: {
    street: 24,
    colony: "soura",
    district: "Home",
  },
};

for (let key in Employee) {
  console.log(key, Employee[key]);
}

for (let key in Employee.address) {
  console.log(key, Employee.address[key]);
}

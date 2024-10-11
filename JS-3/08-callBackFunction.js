// Searching on Objects
let objArray = [
  { No: 1, Name: "Salik" },
  { No: 2, Name: "Burhan" },
];

console.log(objArray);

console.log(objArray.includes({ No: 1, Name: "Salik " })); //present but false

// For this we use callback function
let obj = objArray.find((obj) => obj.Name === "Salik");
console.log(obj);

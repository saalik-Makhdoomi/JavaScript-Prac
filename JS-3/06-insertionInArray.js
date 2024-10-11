let arr = [1, 2, 5, 4, 7];
console.log(arr);

// Insertion at Beginning of Array
arr.unshift(10);
console.log(arr);

// Insertion at End of Array
arr.push(8);
console.log(arr);

// Insertion at Middle
arr.splice(3, 0, 100); //first number 3 here indictaes that on which index we want to add a number then 0 indictaes how many number we want to delete in this case  it's zero and then last digit 100 indicstes which number we want to add
console.log(arr);

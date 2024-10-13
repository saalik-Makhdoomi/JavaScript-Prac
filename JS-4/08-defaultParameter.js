// let simpleInterest = (P , T=2 , R) => {return(P*T*R)/100};
// After Default parameter all remaining parentheses must be empty.. jaise yaha py 10 hai default *
let simpleInterest = (P, T, R = 10) => {
  return (P * T * R) / 100;
};

console.log(simpleInterest(1000, 4, 40)); // 1600
console.log(simpleInterest(1000, 4)); // 400    //* aur yaha py kuch value agr nhi bhi denge toh ye 10 ko accept kr lega

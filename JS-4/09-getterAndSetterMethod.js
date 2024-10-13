let person = {
    firstName : "Salik",
    lastName : "Makhdoomi",

    // Getter
    get fullName()
    {
        return person.firstName + " " + person.lastName;      //here we can aslo use backtick template 
    },

    // Setter
    set fullName(value)
    {
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

console.log(person.fullName);   //issy mera getter call horaha hai

person.fullName = "Burhan Bashir";   //issy hum update krte hai or this is setter property
console.log(person.fullName);

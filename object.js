//singleton

// Object.create    //This is constructor

//object literals

// const mysymbol = Symbol("key1")

const Deep = {
    Name : "Deepak",
    "Real Name" : "Deepak Kumar Gupta",
    Age  : 23,
    // [mysymbol] : "key1",
    Stream : "BCA",
    email  : "deepak950783@gmail.com",
    Lastlogindays : ["Monday","Tuesday","friday"]
}

// console.log(Deep.Lastlogindays);
// console.log(Deep["Lastlogindays"]);
// console.log(Deep["Real Name"]);
// console.log(typeof Deep.mysymbol);
// console.log(Deep[mysymbol]);

// Deep.email = "ram963125@gmail.com"
// Object.freeze = "ritaram@"
// console.log(Deep);


//Function  

Deep.rock = function () {
    console.log("There can only be one winner let's go");

}

Deep.rock2 = function () {
    console.log(`There can only be one winner let's go,${this.name}`);
}


console.log(Deep.rock());
console.log(Deep.rock2());





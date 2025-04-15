// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "raj420"
tinderuser.name = "Deep Gupta"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email : "deep@9631",
    Fullname : {
        usefullnmae :{
            firtname : "deepak",
            lastname :"Gupta"
        }
    }

}
// console.log(regularUser.Fullname.usefullnmae.lastname);

const obj1 ={1:"a" , 2: "b" , 3: "c"}
const obj2 ={4:"d" , 5: "d" , 6: "f"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
// const obj
const users = [
    {
        id: "c125",
        email : "raj@963"
    },
    {
       id : "58kd",
       email: "siya@125"
    },
    {
        name : "Sammy",
        Address : "sidhwaliya"
    }
]
const nweuser = users[1].email
// console.log(nweuser);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLogged'));

// Destructuring object

const school = {
    admission_fee: 5000,
    dress_charge : 2000,
    medium : "Hindi"
}
console.log(school.dress_charge)

const {medium} = school 
console.log(medium);

// short method
const {medium : dim} = school
console.log(dim);

// {
//     "name" : "Deepak Gupta",
//     "coursename" : "js in hindi",
//     "price": "Free"
// }

[
    {},
    {},
    {}
]








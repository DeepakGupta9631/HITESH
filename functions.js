

// function myname() {
//     console.log("D");
//     console.log("E");
//     console.log("E");
//     console.log("P");
//     console.log("A");
//     console.log("k");
// }
// myname  function referance
// myname

// myname()   function execuation use in react and dom manupulation
// myname()

// function addTwoNumber(number1 , number2) {
   
//     console.log(number1+number2);
// }

// const result = addTwoNumber(2,98)

// console.log("result",result);

function addTwoNumber(number1 , number2) {
    
    // let result = number1+number2
    // return result

    return number1 + number2
}

// note result ke baad kuch vi dushra print nahi hota hain

// const result = addTwoNumber(8,2)

// console.log("result",result)

function loginUserMessage(username = "Sita") {
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} is Now online for your session `
}

// console.log(loginUserMessage("DEEPAK"))
// console.log(loginUserMessage("Meena"))




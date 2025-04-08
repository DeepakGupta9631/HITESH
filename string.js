// const name = "hitesh"
// const repoCount = 50

// // console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('hitesh-hc-com')

// // console.log(gameName[0]);
// // console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));

// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// // Expected output: true

// console.log(str1.endsWith("best", 17));
// // Expected output: true

// const str2 = "Is this a question?";

// console.log(str2.endsWith("question"));
// // Expected output: false
// console.log(str2.length);



const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);

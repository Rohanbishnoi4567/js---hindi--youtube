//1 // Primitive

//7 types : string, number , null(object),boolean,undefined,symbol(symbol),Bigint(undefined)


//2 //Reference/non primitive : Array, objects, Functions (data type function)

const score = 100
const scoreValue =100.3
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.table([id,anotherId]);

console.log(id === anotherId);

const bigNumber = 472659724n
console.log(typeof bigNumber);

let biggestNumber = String(bigNumber)
 console.log(biggestNumber);

 const heros = ["shaktiman","naagraj" ]

 let myObj = {
    name:"rohan",
    age: 12,
 }
  console.log(myObj);
  
 console.log(typeof myObj);   
 

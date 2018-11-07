var myString : string|number  // | for diff types

myString = "Bee stinger";

myString = 9; 
//----------------------------------------------------------

function sayHello(name: string|number){ // use " |" to add different types of variable
   return `Hello, ${name}!`;
}

console.log(sayHello("Kermit"));

console.log(sayHello(9)); //answer : 9 is a number, type error
//--------------------------------------------------------------

function fullName(firstName: string, lastName: string, middleName?: string){ // add ? infront of the optional param
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}

console.log(fullName("Mary", "Moore", "Tyler"));

console.log(fullName("Jimbo", "Jones"));


interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4 // make it belts:4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

//-----------------------------------------------------------------------

class Ninja {
   fullName: string;
   constructor(public firstName: string,
                 public lastName: string){
                 this.fullName = `${firstName} ${lastName}`;
             }
   debug(){
      console.log("Console.log() is my friend.")
   }
}

const shane = new Ninja("Shane","Gordon"); // supply two parameters and "new" keyword

const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing",
        debug(){ // added a function

            }
}
// added the type of return for the function
function study(programmer: Ninja) :string {
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}

console.log(study(turing));

//------------------------------------------------------------------
var increment = x => x + 1;

console.log(increment(3));

var square = x => x * x;  // dont need {}

console.log(square(4));


var multiply = (x,y) => x * y; // if more than one params put () around them and use "," in between

var math= (x,y) => { // added = after math to assign , used {} for more than one line of code in the function
    let sum = x + y ;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference];


}

 console.log(math(2,5)); 

//--------------------------------------------------


 class Elephant {
   constructor(public age: number){}
   birthday = age => this.age++; // added arrow fuction
  
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)

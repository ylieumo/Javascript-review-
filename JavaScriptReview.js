/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable

let myVariable = 9;

// 2.) Change the value of this variable

myVariable = 6;

// 3.) Change the data type of this variable

myVariable = "six";

// 4.) Create another variable and the one from above to concatenate

let anotherVariable = "this is a new variable." ;

let concatenateBoth = myVariable + anotherVariable ;


// 5.) Use any of the variables above or create new ones and print using string interpolation

console.log(`myVariable: ${myVariable}`);

console.log(`anotherVariable: ${anotherVariable}`);

// ================ Variable Names =================
/* 
    • Case-sentive! Try it out! :O
    • Can contain letters, digits, or the symbols $ and _
    • Can't start with 0-9
    • Can't use reserved keywords in JS such as var, function, return, etc. 
*/



// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina

let word = "sabrina";
let char = word.charAt(4);
console.log(char)

// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy

// Unicode: is an international character encoding standard that provides a unique number for every 
// character across languages and scripts, making almost all characters accessible across
//  platforms, programs, and devices.

let word = "Teddy"
let char = word.charCodeAt(3)
console.log(char)

// Using fromCharCode() - make it readable for us :). You'll see!
let char1 = String.fromCharCode(100);
console.log(char1);


// Take your first and last name and concat()

let firstName = "Yolande";
let lastName = "Djampou";
let text = firstName.concat(" ", lastName);
console.log(text);

// Create a string and make it return true using startsWith()

let sentence = "Because of you i will face tomorrow.";
let result = sentence.startsWith("Because");
console.log(result);

// Now use any variable with endsWith() and return false

let sentence1 = "Because of you i will face tomorrow.";
let result1 = sentence1.endsWith("tomorrow");
console.log(result1);

// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, and tought it was beautiful';
let result = ozgur.includes("beautiful");
console.log(result)

// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out.Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
let index = joshHadALittleLambOopsCow.indexOf("cow");
console.log(index);

// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
let lastIndex = vanessa.lastIndexOf("Vanessa");
console.log(lastIndex);

// Can we use length for strings? I don't know, you tell me. yes we can use length.
const noWeCantTeo = "but did you try it out though?"
let length = noWeCantTeo.length;
console.log(length);

// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
let replace = replaceGokuWithVegeta.replace("DBZ", "JK");
console.log(replace);

// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'. 
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
let search = joshIsLookingForWifey.search("wifey")
console.log(search);

// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
let slice = pizzaSentence.slice(6,26);
console.log(slice)

// Now using the pizza sentence, return only pizza (before the comma)
let slice1 = pizzaSentence.slice(0,5);
console.log(slice1)

Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. 
Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
let split = splitTheBill.split(",");
console.log(split);


// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces.
//  Using splitTheBill, return an array separating all three by characters.
const splitTheBill = "Yaz, Poornima, and Leshawn"
let split = splitTheBill.split("");
console.log(split);


// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
let toLowerCase = angry.toLocaleLowerCase();
console.log(toLowerCase);

// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
 let toUpperCase = jahlunSaidToPutSomeRespectToHisName.toUpperCase();
 console.log(toUpperCase);


// substring() on the chopping block...
let text = "on the chopping block..."
let substring = text.substring(3,6);
console.log(substring);

// Returns "ell"
const basicGreeting = "Hello World"
let substring = basicGreeting.substring(1,4);
console.log(substring)

// Returns "JavaScript"
const ohReally = "JavaScript Substring"
let substring = ohReally.substring(0,10);
console.log(substring)

// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
let slice = aslDays.slice(-7);
console.log(slice)

// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
let variableWithExtraLoving = "         If only I can use this for my love handles.           ";
let trim = variableWithExtraLoving.trim();
console.log(trim);






// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

console.log(a + b ===15);
console.log(c > b)
console.log(d === d)
console.log(d !== a)
console.log(a < 15)
console.log(a < b < c)
console.log(c - b !== a * d.length);





// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. 
// Make Ken's room spin 10 times using FOR LOOP. 

let text = " ";
for(let i = 1; i<= 10; i++){
  text +=  i + " ";
}
console.log(text);

// Make him print a sentence.

let text = " ";
for(let i = 1; i<= 10; i++){
  text +=  i + " = " + "my head is spinning" + "\n " ;
}
console.log(text);

// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.

for (let i=1; i<=20; i++ ){
  console.log(i)
}


// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.

let sorry = " ";
let i = 1
while (i<=20){
  sorry += "I'm sorry: " + i + " time " + "\n"
  i++
}
console.log(sorry)

// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 

// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
}

let text = " ";
for(let x in whateverQueenBeySaid){
  text += whateverQueenBeySaid[x] + ", "
}
console.log(text)

// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a']

for(let index in lana){
  console.log(index)
}

// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner']

for(let index of tia){
  console.log(index)
}

// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan']

perscholas.forEach(function(perschola){
  let PS = "Swathi said don't forget "
  let concat = PS.concat(" ", perschola);
  console.log(concat)
});



// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do

// push(): Adds one or more elements to the end of an array and returns the new length of the array.

// pop(): Removes the last element from an array and returns that element. This method modifies the array.

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

// shift(): Removes the first element from an array and returns that element. This method modifies the array.

// concat(): Combines two or more arrays, creating a new array without modifying the existing arrays.

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).

// sort(): Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the 
//          elements into strings and comparing their sequences of UTF-16 code units.

// includes(): Checks if an array includes a certain element and returns true or false accordingly.

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// length: Property of an array that returns or sets the number of elements in that array. It represents the length or size of the array


const fruits = ['apple', 'banana', 'orange']

// Print banana
let fruit = fruits[1];
console.log(fruit);

// Let's turn it up a notch. I won't tell you what array methods to use. 

// Join all the elements of the array into a string separated by a space.
let join = fruits.join(" ");
console.log(join);

// Remove orange
console.log(fruits.pop());
console.log(fruits);

// Add strawberry, kiwi, and grapes at the end.
console.log(fruits.push("strawberry", "kiwi", "grapes"));
console.log(fruits);

// Remove apple
console.log(fruits.shift());
console.log(fruits);

// Add mango at the beginning of the array
console.log(fruits.unshift("mango"));
console.log(fruits);

// Add lemon, and grapefruit between mango and banana
console.log(fruits.splice(0, 1,"mango", "lemon", "grapefruit"));
console.log(fruits);

// Remove banana and strawberry
console.log(fruits.splice(1, 1));
console.log(fruits);

// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array.
let exoticFruits = ["pinaple", "papaya", "tangerine"]

//  Create a new variable and assign it with the value of concatinating fruits array and exoticFruits array.
let concat = fruits.concat(exoticFruits);
console.log(concat);

// Print the last two exotic fruits without altering the newly concatenated array.
console.log(concat.slice(-2));
console.log(concat);


// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
console.log(monalissaIsMessy.sort());

// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
console.log(mirrorMirrorOnTheWall.reverse());

// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."

// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]





// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator

// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.

// Using the variable with the newly connected arrays, use spread operator to add something at the end.

// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.



// ===== ACCESS =====

// Donut Shopping
const donutShop =[
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
// Tosi wants ihatethis. :) Print!




// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...

// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
let personName = "Teo";
if(personName === "Teo"){
  console.log('Teo is a person!');
}
else{
  console.log('Teo is not a person!');
}

// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. 

let personName = "Teo";
let personGender = "male";
if(personName === "Teo"){
 if(personGender === "male"){
  console.log('Teo is a person!');
  console.log('You got it right!');
}
else{
  console.log('wrong')
}
}else{
    console.log('Teo is not a person!');
  }


// Teo is going to remove you from the class.'.

// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' 
// then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
let personName = "Teo";
let personGender = "male";
let personHunger ="hungry"
if(personName === "Teo"){
 if(personGender === "male"){
  if(personHunger === "hungry"){
    console.log('Teo is a person!');
    console.log('You got it right!');
    console.log("Let's buy Teo some tacos!");
  }else{
    console.log("He doesn't need to eat." )
  }
}}
else{
  console.log('If Teo is not hungry, am I hungry?')
}


// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'

let coolestPerson = "Gustavo";
if(coolestPerson === "Gustavo"){
console.log('You got that right!')
}
else{
  console.log("James wants to argue. He says he's the best!")
}
     

// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreetting(){
  console.log("Hello, ma'amsir!");
  }
  sayGreetting();
  
  // Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'.
  //  Please replace the (STRING) with the parameter. Don't play with me haha.
  
  function printMessage(string){
    return string;
  }
  var message = "The is my (STRING)";
  var displayMessage = printMessage(message);
  console.log(displayMessage);
  
  var message = "Don't play with me haha.";
  var displayMessage =printMessage(message);
  console.log(displayMessage);
  
  
  // Create a function called add that takes in three number parameters. 
  // Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
  
  function add(a, b, c){
    return a + b + c 
  }
  var result = add(5,7,3);
  console.log(result)
  
  // Create a function called fightClub() that accepts a name parameter.  If the name:
  // 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
  // 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
  // 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
  // 'Devin' RETURN '4th rule: Only two guys to a fight.'
  // Anything else, RETURN 'No shirts
  
  function fightClub(name){
    if (name =='Teo'){
      return "1st rule: you do not takl about fight club ";
    }else if(name == 'manara'){
      return "2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB";
    }else if (name == 'Liv'){
      return "3rd rule: If someone yells stop!, goes limo, taps out, the fight is over.";
    }else if (name == 'devine'){
      return "4th rule: Only two gyus to a fight";
    }else {
      return "no shirts";
    }
  }
  var result = fightClub("name"); 
  console.log(result)
  
  
  // Create a function called hello() that prints 'Hello'.
  //  Return an anonymous function inside hello() and have it print 'Goodbye'.
  //  Invoke your hello function in some way to see Hello and Goodbye in the console.
  
  function hello(){
    console.log("Hello");
   return function(){
    console.log("Goodbye")
    }
    ();
     return function(greet){
    console.log(greet, "Goodbye")
    }
    ("Hello,");
  }
  
  hello()
  
  // Create a function expression with your first name as the variable and then print your first and last name
  
  function myName(firstName){
   console.log("Djampou");
   return firstName +"  "+ "Djampou"
  }
   let message = myName("Yolande");
  
  console.log(message)
  
  // Create an arrow function that accepts a number and have it return that number doubled
  
  let myFunction = (a) =>  a * 2;
  
  let double = myFunction(5)
  console.log(double)
  
  




// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.

let human = {
  name: "Yolande",
  age: 21,
  location: "Methuen"
};

// Access the name using dot notation

console.log(human.name);

// Access the age using square brackets

console.log(human["age"]);

// Use object destructuring to access location

const { location } = human;
console.log(location);

// ACCESS Granted
const bulbasaur = {
name: 'Bulbasaur',
abilities: [
  {
    ability: 'overgrow'
  },
  {
    ability: 'chlorophyll'
  }
],
moves: ['razor-wind', 'swords-dance', 'cut'],
sound: function () {
  console.log('Bulbahhhh!!!!!')
}
}

// Print overgrow
console.log(bulbasaur.abilities[0].ability);

// Print cut
console.log(bulbasaur.moves[2])

// Print Bulbahhhh!!!!!
bulbasaur.sound()

// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;

// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1;

// Print an array that contains every single properties in bulbasaur
const propertiesArray = Object.keys(bulbasaur);
console.log(propertiesArray);

// Print every single properties one by one in the console
propertiesArray.forEach(property => {
  console.log(property);
})

// Print an array that contains every single values in bulbasaur
const valuesArray = Object.values(bulbasaur);
console.log(valuesArray);
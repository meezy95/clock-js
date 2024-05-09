//console.log(`Hello`);
//console.log(`i like pizza`)

//window.alert(`This is an alert`);
//window.alert(`i like pizza`);

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like pizza`;

//variable = a container that stores a value
//              behaves as if it were the value it contains

// strings, numbers, booleans

// 1. declaration let x;
// 2. assignment x = 100;

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// let firstName = "Yo";
// let favoriteFood = "sushi"
// let email = "yo123@gmail.com"

// let online = false;
// let forSale = true;
// let isStudent = true;
// 
// console.log(typeof online)
// 
// console.log(`Yo is online ${online}`)
// console.log(`is this car for sale: ${forSale}`)
// console.log(`Enrolled: ${isStudent}`)

// console.log(typeof firstName)
// console.log(`Your name is ${firstName}`)
// console.log(`Your favorite food is ${favoriteFood}`)
// console.log(`Your email is ${email}`)
// console.log(`You are ${age} years old`)
// console.log(`The price is ${price} dollars`)
// console.log(`Your GPA is ${gpa}`)

// let fullName = "yo yooo";
// let age = 25;
// let isStudent = false;
// 
// document.getElementById("p1").textContent = `Your name is ${fullName}`
// document.getElementById("p2").textContent = `You are ${age}`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

// arithemetic operators = operands (values, variables, etc)
//                         operators ( + - * /)
//                         ex. 11 = x + 5;

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2; //double asterisk = exponents
//let extraStudents = students % 3; //modulusk the remainder

//augemented assignment operators

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2; //helpful when determining whether a number is even or odd
//students++;
//students--;

/*

operator precedence

1. parantheses
2. exponents
3.multiplication & division & modulo
4. addition and subtraction

*/

//let result = 1 + 2 * 3 + 4 ** 2;
//let result = 12 % 5 + 8 / 2;
//let result = 6 / 2 ** (2 + 5);

//console.log(result);

// how to accept user input

// 1. EASY WAY  = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username;
// 
// username = window.prompt("what's your username?");
// console.log(username);

// let username;
// 
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
//     
// }

// type conversion = change the data type of a value to another type
//                   (strings, numbers, booleans)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// 
// console.log(age, typeof age);

// let x;
// let y;
// let z;
// 
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// 
// console.log(x, typeof x) 
// console.log(y, typeof y) 
// console.log(z, typeof z)

// why type cast a string as a boolean? thats one way to see if user input is empty. Did the user type something in

// const = a variable that can't be changed

// const PI = 3.14159;
// let radius;
// let circumference;
// 
// document.getElementById("mySubmit").onclick= function() {
//     radius = document.getElementById("myText").value;
//     radius = Number(radius)
//     circumference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = circumference + "cm";
// }

// COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;
// 
// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// 
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// 
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }

// Math = built in object that provides a colletion of properties and methods

//let x = 3;
//let y = 2;
//let z = 1;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x)
//z = Math.sin(x);
//z = Math.cos(x);
//z = Math.tan(x);
//z = Math.abs(x)
//z = Math.sign(x);
//let max = Math.max(x, y, z);
//let min = Math.min(x, y, z);

//console.log(min)

// RANDOM NUMBER GENERATOR

// const myButton = document.getElementById("myBtn");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;
// 
// myButton.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

//IF STATEMENTS  - if a condition is true, exectue some code, if not, do something else

// const myText = document.getElementById("myText")
// const mySubmit = document.getElementById("mySubmit")
// const resultElement = document.getElementById("resultElement")
// let age;
// 
// mySubmit.onclick = function(){
// 
//     age = myText.value;
//     age = Number(age);
// 
//     if(age >= 100){
//         resultElement.textContent = `You are too old to enter this site`;
//     }
//     else if(age == 0){
//         resultElement.textContent = `You can't enter. You were just born`;
//     }
//     else if (age >= 18){
//         resultElement.textContent = `You are old enough to enter this site`;
//     }
//     else if(age < 0){
//         resultElement.textContent = `Your age can't be below 0`;
//     }
//     
//     else {
//         resultElement.textContent = `You must be 18+ to enter this site`;
//     }
// }
// 

// .checked - property that determines the checked state of an HTML checkbox or radio button element

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");
// 
// mySubmit.onclick = function(){
//     
//     if(myCheckbox.checked){
// 
//         subResult.textContent = `You are subscribed!`;
// 
//     }
// 
//     else {
// 
//         subResult.textContent = `You are not subscribed!`;
//     }
// 
//     if(visaBtn.checked){
// 
//         paymentResult.textContent = `You are paying with Visa`;
// 
//     }
// 
//     else if(masterCardBtn.checked){
// 
//         paymentResult.textContent = `You are paying with Mastercard`;
//     }
// 
//     else if(paypalBtn.checked){
// 
//         paymentResult.textContent = `You are paying with Paypal`;
//     }
//     else {
//             paymentResult.textContent = `You must select a payment type`;
//         }
// 
//     }
// 

// ternary operator = a shortcut to if() and else() statements helps assign a variable based on a condition condition ? codeIfTrue : codeIfFalse;

// let age = 21;
// 
// let message = age >= 18 ? "You're an adult" : "You're a minor"
// console.log(message)
// 

// let time = 9;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);
// 

// let isStudent = false;
// let message = isStudent ? "You are a student" : "You are not a student"
// console.log(message);
// 

// let purchaseAmount = 99;
// let discount = purchaseAmount >= 100 ? 10 : 0
// console.log(`Your total is $${purchaseAmount -  purchaseAmount * (discount/100)}`);
// 

// SWITCH = can be an efficient replacement to many else if statements

// let testScore = 33;
// let letterGrade;
// 
// switch(true){
// 
//     case testScore >= 90:
//         letterGrade = "A";
//         break;
// 
//     case testScore >= 80:
//         letterGrade = "B";
//         break;
// 
//     case testScore >= 70:
//         letterGrade = "C";
//         break;
// 
//     case testScore >= 60:
//         letterGrade = "D";
//         break;
// 
//     default:
//         letterGrade = "F";
// }
// 
// console.log(letterGrade)
// 

// string methods = allow you to manipulate and work with text

// let userName = " Yooo";

// by adding a dot, we are accessing and properties or methods that the string has



//console.log(userName.charAt(1))


//console.log(userName.indexOf("o"))


//console.log(userName.lastIndexOf("o"))

//console.log(userName.length);

// userName = userName.trim();
// console.log(userName);

// userName = userName.toUpperCase();
// console.log(userName);

// userName = userName.repeat(4);
// console.log(userName);

// let result = userName.startsWith(" ");
// 
// if(result){
//     console.log("Your username can't begin with an empty space ' ' ");
// }
// else {
//     console.log(userName);
// }

// let phoneNumber = "123-456-7890";
// 
// phoneNumber = phoneNumber.padEnd(20, 0);
// 
// console.log(phoneNumber);

// string slicing = creating a substring from a porition of another of anothr string

// string.slice(start, end)

// const fullName = "Bro Code";

// let firstName = fullName.slice(0, 3);
// let lastName = fullName.slice(4);
// 
// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);
// 

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);

//console.log(firstChar);
//console.log(lastChar);

// const email = "yooo1@gmail.com"
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(username);
// console.log(extension);

// method chaining = calling one method after another in one continous line of code

// ------- NO METHOD CHAINING ----------

// let username = window.prompt("Enter your username: ");
// 
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// 
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// 
// console.log(username);



// ------- METHOD CHAINING -----------

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);   

// logical operators = used to combine or manipulate boolean values (true or false)

// AND = &&
// OR || 
// NOT = !

// const isSunny = false;
// 
// if(!isSunny){
//     console.log("It is CLOUDY");
// }
// else {
//     console.log("it is SUNNY");
// }

// = assignment operator
// == comparison operator
// === strict equlity operator (compare if values and datatype are equal)
// != inequality operator
// !== strict inequality operator

// const PI = "3.14"
// 
// if(PI !==  "3.14"){
//     console.log("That is not Pi")
// }
// else{
//     console.log("That is Pi")
// }
// 

// while loop = repeat some code while a condition is true

// let loggedIn = true;
// let username;
// let password;
// 
// do{
//     username = window.prompt("Enter your username: ");
//     password = window.prompt("Enter your password: ");
// 
//     if(username === "myUsername" && password === "myPassword"){
//     loggedIn = true;
//     console.log("You are logged in!");
//     }
//     else{
//         console.log("invalid credentials! Please try again. ");
//     }
// }while(!loggedIn)
// 

// for loop = repeat some code a LIMITED amount of times

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

//conitune will skip an iteration. Break will escape the loop

//NUMBER GUESSING GAME

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// 
// let attempts = 0;
// let guess;
// let running = true;
// 
// while(running == true){
// 
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);
// 
//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number");
//     }
//     else {
//         attempts++;
//         if(guess < answer){
//             window.alert("Too low! Try Again!")
//         }
//         else if(guess > answer){
//             window.alert("Too high! Try again!")
//         }
//         else{
//             window.alert(`CORRECT! THE ANSWER WAS ${answer} it took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }

// function = a section of reusable code
// declare code once, use it whenever you want
// call the function to execute that code

// function happyBirthday(username, age){
//     console.log("Happy birthday to you!");
//     console.log("Happy birthday to you!");
//     console.log(`Happy birthday dear ${username}!`);
//     console.log(`You are ${age} years old`);
// }
// 
// happyBirthday("yooo", 25);
// happyBirthday("spongebob", 30);
// happyBirthday("patrick", 37);
// 

// function add(x, y){
//     return x + y;
// }
// 
// let answer = add(2, 3);
// console.log(answer);

// function subtract(x, y){
//     return x - y;
// }
// 
// console.log(subtract(2, 3));

// function multiply(x, y){
//     return x * y;
// }
// 
// console.log(multiply(2, 3));

// function divide(x, y){
//     return x / y;
// }
// 
// console.log(divide(2, 3));

// function isEven(number){
    
    // if(number % 2 === 0){
    //     return true;
    // }
    // else {
    //     return false;
    // }

    //written with ternary operator

//     return number % 2 === 0 ? true : false;
// }
// 
// function isValidEmail(email){
// 
//     // if(email.includes("@")){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }
// 
//     //written with ternary operator
// 
//     return email.includes("@") ? true : false;
//     
// }
// 
// console.log(isValidEmail("yoooo@gmail.com"));
// console.log(isValidEmail("elonmusk.com"));

// variable scope = where a variable is recognized and accesible (local vs global)

// you can reuse the same variable name in your program, as long as their within different scopes

// variable defined outside a function - global
// variable defined insiade a function - local 


// let x = 3;
// 
// function function1(){
//     let x = 1;
//     console.log(x);
// }
// 
// function function2(){
//     let x = 2;
//     console.log(x);
// }
// 
// function1();
// function2();

// TEMPERATURE CONVERSION PROGRAM

// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;
// 
// 
// function convert(){
// 
//     if(toFahrenheit.checked){
//         temp = Number(textBox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//         
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.value);
//         temp = (temp - 32) * (5 / 9);
//         result.textContent = temp.toFixed(1) + "°C";
//     }
//     else 
//     {
//         result.textContent = "Select a unit";
//     }
// 
// }

// array = a variable like structure that can hold more than one value

// let fruits = ["apple", "orange", "banana", "coconut"];
// 
// fruits.sort().reverse();
// 
// 
// for(let fruit of fruits){
//     console.log(fruit);
// }
// 

// spread operator = ... allows an iterable such as an array or string to be expanded
// into seperate elements (unpacks the elements)

// let fruits = ["apple, orange, banana"];
// let vegetables = ["carrots", "celery", "potatos"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];
// 
// console.log(foods);

// rest parameters = (...rest) allow a function work with variable number of arguments by building them into an array
// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

// function combineString(...strings){
//     return strings.join(" ");
// }
// 
// 
// 
// const fullName = combineString("Mr.", "Spongebob", "Squarepants", "III");
// 
// console.log(fullName);

//DICE ROLLER PROGRAM

// unction rollDice(){
// 
//    const numOfDice = document.getElementById("numOfDice").value;
//    const diceResult = document.getElementById("diceResult");
//    const diceImages = document.getElementById("diceImages");
//    const values = [];
//    const images = [];
// 
//    for(let i = 0; i < numOfDice; i++){
// 
//        const value = Math.floor(Math.random() * 6) + 1;
//        values.push(value);
//        images.push(`<img src="dice_images/${value}.png", alt="Dice ${value}">`);
//    }
// 
//    diceResult.textContent = `dice ${values.join(', ')}`;
//    diceImages.innerHTML = images.join('');
// 

// RANDOM PASSWORD GENERATOR

// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
// 
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()";
//     
//     let allowedChars ="";
//     let password = "";
// 
//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";
// 
//     if(length <= 0){
//         return `(password length must be at least 1)`
// 
//     }
//     if(allowedChars.length === 0){
// 
//         return `(At least one set of characters needs to be selected)`
//     }
// 
//     for(let i = 0; i < length; i++){
// 
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
// 
//     }
// 
//     return password;
// }
// 
// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;
// 
// const password = generatePassword
//     (passwordLength, 
//     includeLowercase, 
//     includeUppercase, 
//     includeNumbers, 
//     includeSymbols)
// 
// console.log(`generated password ${password}`);
// 

// callback = a function that is passed as an argument to another function
// used to handle asynchrous operations:
// 1: Reading a file
// 2: Network requests
// 3. Interacting with databases

// "Hey, when you're done, call this next"

// sum(displayPage, 1, 2);
// 
// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }
// 
// function displayConsole(result){
//     console.log(result);
// }
// 
// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }
// 

//forEach() = method used to iterate over the elements of an array and apply a specified function (callback)
// to each element
// array.forEach(callback)

// let fruits = ["apple", "orange", "banana", "coconut"];
// 
// fruits.forEach(capitalize);
// fruits.forEach(display);
// 
// function display(element){
//     console.log(element);
// }
// 
// function lowercase(element, index, array){
//     array[index] = element.toLowerCase();
// }
// 
// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// 
// function uppercase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// 

// .map() = accepts a callback and applies that function to each element of an array, then return a new array

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);
// 
// console.log(formattedDates)
// 
// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}}`;
// }
// 

// .filter() = creates a new array by filtering out elements

// const words = ["apple", "orange", "banana", "kiwi", "pomegrante", "coconut"];
// 
// const shortWords = words.filter(getShortWords);
// 
// const longWords = words.filter(getLongWords);
// 
// console.log(longWords);
// 
// 
// function getShortWords(element){
//     
//     return element.length <= 6;
// 
// }
// 
// function getLongWords(element){
// 
//     return element.length > 6;
// }
// 

// .reduce() reduce the element of an array to a single value

// const grades = [75, 50, 90, 80, 65, 95];
// 
// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);
// 
// console.log(minimum);
// 
// function getMax(accumulator, element){
// 
//     return Math.max(accumulator, element);
// }
// 
// function getMin(accumulator, element){
// 
//     return Math.min(accumulator, element);
// }
// 

// function decleration = define a reusable block of code that performs a specific task

// function expression = a way to derive functons as values or variables
// can pass entire function as an argument. Don't need to keep thinking of function namnes
// also used in

// 1. Callbacks in asynchrous operations
// 2. Higher-Order functions
// 3. Closures
// 4. Event Listeners

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });
// const cubes = numbers.map(
//     function(element){
//         return Math.pow(element, 3);
//     });
// 
// const evenNums = numbers.filter(function(element){
//     return element % 2 === 0;
// })
// 
// const oddNums = numbers.filter(function(element){
//     return element % 2 !== 0;
// })
// 
// const total = numbers.reduce(function(accumulator, element){
//     return accumulator + element;
// })
// 
// console.log(total);
// 

// arrow functions = a concise way to write a function expression.
// good for simple functions that you only use once (parameters) => some code

// const numbers = [1, 2, 3, 4, 5, 6];
// 
// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, element) => accumulator + element);
// 
// console.log(total);
// 

// object = A collection of related properties and/or methods
// can represent rasl world objects (people, products, places)
// object = {key: value,
//           function()}

// const person1 = {
//     firstName: "spongebob",
//     lastName: "squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: () => console.log("Hi, I am spongebob"),
//     eat: () => console.log("I am eating a krabby patty")
// 
// }
// 
// const person2 = {
//     firstName: "patrick",
//     lastName: "star",
//     age: 42,
//     isEmployed: false,
//     sayHello: () => console.log("Hey, I'm Patrick..."),
//     eat: () => console.log("I am eating roast beef, chicken, and pizza")
// 
// }
// 
// person1.eat();
// person2.eat();
// 

// this = reference to the object where this is used (the object dependws on the immediate context)
// person.name = this.name

// const person1 = {
//     name: "spongebob",
//     favFood: "hamburgers",
//     sayHello: function(){
//         console.log(`Hi! I am ${this.favFood}`)
//     },
//     eat: function(){
//         console.log(`${this.name} is eating ${this.favFood}`)
//     }
// }
// 
// const person2 = {
//     name: "patrick",
//     favFood: "pizza",
//     sayHello: function(){
//         console.log(`Hi! I am ${this.favFood}`)
//     },
//     eat: function(){
//         console.log(`${this.name} is eating ${this.favFood}`)
//     }
// }
// 
// 
// person1.eat();
// person2.eat();
// 

// constructor = a special method for defining the properties and methods of objects

// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){
//         console.log(`You drive the ${this.model}`)
//     }
// }
// 
// const car1 = new Car("Ford", "Mustang", "2024", "Red");
// 
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();
// 
// const car2 = new Car("Chevrolet", "Camaro", "2025", "Blue");
// 
// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);
// car2.drive();
// 
// const car3 = new Car("Dodge", "Charger", "2026", "Silver");
// 
// console.log(car3.make);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);
// car3.drive();
// 


// class = (ES6) provides a more structured and cleaner way to work with objects compared to traditional constructor functions.
// ex. static keyword, encapsulation, inheritance

// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
// 
//     displayProduct(){
//         console.log(`Product: ${this.name}`)
//         console.log(`Price: $${this.price.toFixed(2)}`)
//     }
// 
//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// 
// }
// 
// const salesTax = 0.05;
// 
// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100);
// 
// product3.displayProduct();
// 
// const total = product3.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);
// 

// static = keyword that defines properties or methods that belong to a class itself rather than the objects created 
// from that class (class owns aything static, not the objects)

// class User {
// 
//     static userCount = 0;
// 
//     constructor(username){
// 
//         this.username = username;
//         User.userCount++;
// 
//     }
// 
//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online`);
//     }
// 
//     sayHello(){
//         console.log(`Hello, my username is ${this.username}`);
//     }
// 
// }
// 
// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");
// 
// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// 
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// User.getUserCount();
// 

// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child) helps with code reusability

// class Animal {
//     alive = true;
// 
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
// 
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// 
// class Rabbit extends Animal{
// 
//     name = "rabbit";
// 
//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// 
// }
// 
// class Fish extends Animal {
// 
//     name = "Fish";
// 
//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// 
// }
// 
// class Hawk extends Animal {
// 
//     name = "Hawk";
// 
//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// 
// }
// 
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();
// 
// console.log(fish.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();
// 

// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

// class Animal {
// 
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// 
//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed} MPH`);
//     }
// 
// }
// 
// class Rabbit extends Animal {
// 
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
// 
//     }
// 
//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// 
// }
// 
// class Fish extends Animal {
// 
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
// 
//     }
// 
//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.swimSpeed);
//     }
// 
// }
// 
// class Hawk extends Animal {
// 
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
// 
//     }
// 
//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.flySpeed);
//     }
// 
// }
// 
// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);
// 
// hawk.fly();
// 

// getter = special method that make a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

// class Person{
// 
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// 
//     set firstName(newFirstName){
// 
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error("First name must be a non empty string");
//         }
//     }
// 
//     set lastName(newLastName){
// 
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error("Last name must be a non empty string");
//         }
// 
//     }
// 
//     set age(newAge){
// 
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge
//         }
//         else{
//             console.error("Age must be a noon negative number");
//         }
//     }
// 
//     get firstName(){
//         return this._firstName;
//     }
// 
//     get lastName(){
//         return this._lastName;
//     }
// 
//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }
// 
//     get age(){
//         return this._age;
//     }
// 
// }
// 
// const person = new Person("spongebob", "squarepants", 30);
// 
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);
// 

// destructuring = extract values from arrays and objects,
// then assign them to variables in a convienent way
// [] = to perform array destructuring
// {} = to perform object destructuring
// 5 examples

// EXAMPLE 1 - SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;
// 
// [a, b] = [b, a];
// 
// console.log(a);
// console.log(b);
// 

// EXAMPLE 2 - SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ["red", "green", "blue", "black", "white"];
// 
// [colors[0], colors[4]] = [colors[4], colors[0]];
// 
// console.log(colors);
// 

// EXAMPLE 3 - ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];
// 
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// 
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(...extraColors);
// 

// EXAMPLE 4 - EXTRACT VALUES FROM OBJECTS

// const person1 = {
// 
//     firstName: "Spongebob",
//     lastName : "Squarepants",
//     age: 30,
//     job: "Fry Cook"
// 
// }
// 
// const person2 = {
// 
//     firstName: "Patrick",
//     lastName : "Star",
//     age: 34,
// 
// }

// const {firstName, lastName, age, job="unemployed"} = person2;
// 
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// EXAMPLE 5 - DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({firstName, lastName, age, job="unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }
// 
// displayPerson(person1);
// 

// nested objects = Objects inside of other objects.
// allows you to represent more complex data structures
// child object is enclosed by a parent object

// Person(Address{}, ContactInfo{}})
// ShoppingCart(Keyboard{}, Mouse{}, Monitor{}})

// class Person {
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }
// 
// class Address{
// 
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// 
// }
// 
// const person1 = new Person("Spongebob", 30, 
// "124 Conch st", 
// "Bikini Bottom", 
// "Int Waters");
// 
// const person2 = new Person("Patrick", 37, 
// "128 Conch st", 
// "Bikini Bottom", 
// "Int Waters");
// 
// const person3 = new Person("Squidward", 45, 
// "126 Conch st", 
// "Bikini Bottom", 
// "Int Waters");
// 
// console.log(person3.address.country);
// 

// work with an array of objects in js

// const fruits = [{name: "apple", color: "red", calories: 95},
//                 {name: "orange", color: "orange", calories: 45}, 
//                 {name: "banana", color: "yellow", calories: 105},
//                 {name: "coconut", color: "white", calories: 159}, 
//                 {name: "pineapple", color: "yellow", calories: 37}];
// 

//fruits.push({name: "grapes", color: "purple", calories: 62});


//-------------forEach()------------------

//fruits.forEach(fruit => console.log(fruit.calories));

//-------------map()----------------------

// const fruitNames = fruits.map(fruit => fruit.name);
// const fruitColors = fruits.map(fruit => fruit.color);
// const fruitCalories = fruits.map(fruit => fruit.calories);
// 
// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);

//------------filter()---------------------

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
// 
// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

//-----------reduce()-----------------------

// const maxFruit = fruits.reduce((max, fruit) => 
//                                 fruit.calories > max.calories  ? 
//                                 fruit : max);
// 
// 
// console.log(maxFruit);
// 
// const minFruit = fruits.reduce((min, fruit) => 
//                                 fruit.calories < min.calories  ? 
//                                 fruit : min);
// 
// 
// console.log(minFruit);
// 

// sort() = method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

// const people = [{name: "spongebob", age: 30, gpa: 3.0}, 
//                 {name: "Patrick",   age: 37, gpa: 1.5}, 
//                 {name: "squidward", age: 51, gpa: 2.5 }, 
//                 {name: "sandy", age: 27,     gpa: 4.0}];
// 
// people.sort((a, b) => b.name.localeCompare(a.name));
// console.log(people);
// 

// shuffle the elements of an array using js
// Fisher- yates algorithm

// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// 
// shuffle(cards);
// 
// console.log(cards);
// 
// function shuffle(array){
// 
//     for(let i = array.length - 1; i > 0; i--){
// 
//         const random = Math.floor(Math.random() * (i + 1));
// 
//         [array[i], array[random] = array[random], array[i]];
// 
//     }
// }
// 

//Data objects = Objects that contain values that represent dates and times
// these data objects can be changed and formatted


//Date(year, month, day, hour, minute, second, ms)

// const date1 = new Date("2023-12-31");
// const date2 = new Date ("2024-1-1");
// 
// if(date2 > date1){
//     console.log("Happy New Year!");
// }
// 

// closure = a function defined inside another function.
// the inner function has access to the variables and scope of the outer function
// allow for private variables and state maintenenace 
// used frequently in JS frameworks: React, Vue, Angular

// 
// function createGame(){
// 
//     let score = 0;
// 
//     function increaseScore(points){
// 
//         score += points;
//         console.log(`+${points}pts`);
//     }
//     
//     function decreaseScore(points){
//     
//         score -= points;
//         console.log(`-${points}pts`);
//     }
//     
//     function getScore(){
//         return score;
//     }
//     
//     return {increaseScore, decreaseScore, getScore};
// }
// 
// const game = createGame();
// 
// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);
// console.log(`The final score is ${game.getScore()}pts`);
// 

// setTimeout() = function in javascript that allows you to schedule
// the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies vased on workload of the javascript runtime env.)

// setTimeot(callback, delay)

// let timeoutID;
// 
// function startTimer(){
//     setTimeout(() => window.alert("Hello"), 3000);
//     console.log("STARTED");
// }
// 
// function clearTimer(){
//     clearTimeout(timeoutID);
//     console.log("CLEARED");
// }
// 

//DIGITAL CLOCK PROGRAM 

function updateClock(){

    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);


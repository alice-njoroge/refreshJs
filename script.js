
let output = document.getElementById("welcome");
let val = document.getElementById("val");
val.value = output.innerHTML;

console.log("value is" + val);

/*
//objects and loops
let car = {color:"red", make:"ford", doors:5, year:2020};
for (let property in car ){
    console.log(property + ":" + car[property]);
}
//Nested objects
 let bob = {hair:"black",age:20 , eyes:"brown", height:54, job:"development"};
let friends = {friend1:bob, friend2: {hair:"brown", eyes:"blue", age:30} }
let friends1 = [bob, {hair:"brown", eyes:"blue"}];

console.log("Hello there " + friends1[1].eyes); //retrieve info on nested arrays objects

//Arrays
let animals = ["cat", "rabbit", "bird", "fish", "chicken"];

//sort in reversing order
let sortedArray = animals.sort().reverse();
console.log(sortedArray);

//index guessing game
let randomIndex = Math.floor(Math.random() * animals.length);
let randomAnimal = animals[randomIndex];
let userNumber = prompt("what position do you think " + randomAnimal + " is?");
let response = userNumber == randomIndex ? "you are right!" : "Wrong! the correct value is " + randomIndex ;
alert(response);

//find out if text entered is a palindrome or not
let userValue = prompt("please key in the word");
let reversedString = userValue.split("").reverse().join('');
userValue === reversedString ?  alert("This is a palindrome") : alert("Sorry, this is not a palindrome");

//arrays in JS
let task = ["work", "take trash out","write JS", "take breakfast", "go home"];
let progress = ["done", "in progress", "to do"];

let rsp1 = prompt("which task 1- " + (task.length) +"?");
let rsp2 = prompt("status? 1=done 2=in progress  3=to do");
console.log("today you will " + task[(task.length - 1)] + "status is " + progress[rsp2]);

task[task.length] = "eat banana";
console.log(task);

//strings in JS
let t8= "hello world\'s"
let t9 = "my fraction is 5/8"
console.log(t8, t9);

let q1 = "what is ";
let q2 = "your name";
let question = q1 + q2 + "?";
let myName= prompt(question);
alert("Hello"+ " "+ myName);

let firstNumber = prompt("first number?");
let secondNumber = prompt("second number?");
let result = Number(firstNumber) + Number(secondNumber);
alert("your result is " + result);
*/
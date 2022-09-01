
document.write("I am here");
//Alert
//alert("Hello ");
//console
console.log("it worked!");

let animals = ["cat", "rabbit", "bird", "fish", "chicken"];
let randomIndex = Math.floor(Math.random() * animals.length);
let randomAnimal = animals[randomIndex];
let userNumber = prompt("what position do you think " + randomAnimal + " is?");
let response = userNumber == randomIndex ? "you are right!" : "Wrong! the correct value is " + randomIndex ;
alert(response);
/*
let task = ["work", "take trash out","write JS", "take breakfast", "go home"];
let progress = ["done", "in progress", "to do"];

let rsp1 = prompt("which task 1- " + (task.length) +"?");
let rsp2 = prompt("status? 1=done 2=in progress  3=to do");
console.log("today you will " + task[(task.length - 1)] + "status is " + progress[rsp2]);

task[task.length] = "eat banana";
console.log(task);

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
alert("your result is " + result); */

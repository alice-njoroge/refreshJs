//guessing game

let adjectives = ["awesome", "amazing", "wonderful"];
let output = document.getElementById("output");

function guessAdj(){
    let i = Math.floor(Math.random() * (adjectives.length) );
    console.log(i)
    let user = prompt("what is your name?");
    output.innerHTML = adjectives[i] + " " + user;
}
guessAdj();
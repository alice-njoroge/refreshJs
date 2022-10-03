//do while - print even numbers between 0 and 30
let output = document.getElementById("output");
let x = 0;
do {
    x++;
    output.innerHTML += x + "x count <br>";
} while (x <= 10);
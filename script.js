// function variables
let output = document.getElementById("output");
let a = "hello ";
let b = "world";

myFunction( a, b);

function myFunction() {
    return  output.innerHTML = a + b;
}

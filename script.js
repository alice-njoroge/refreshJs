// for in
let userNames = ["larry", "mike"];
let output = document.getElementById('output');
for ( let v of userNames) {
    output.innerHTML += v + "<br>";
}
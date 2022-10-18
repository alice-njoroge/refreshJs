// mini calculator
let userNames = ["larry", "mike", "john", "frank"];
let output = document.getElementById('output');
for ( let v in userNames) {
    output.innerHTML += userNames[v] + "<br>";
}
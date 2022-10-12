//nested loops -- building a table
let output = document.getElementById('output');
let sum = 0; // initialization should be done outside the loop so you dont reset the values
//
for (let i = 0; i < 100; i++) {
    if (i % 5 === 0) {
        sum += i;
        output.innerHTML += "value is" + i + "sum= " + sum + "<br>";
    }
}

//fast way of doing the same
let summation = 0
for (let i = 0; i < 100; i++) {
    if (i % 5 !== 0) {
        continue;
    }
    summation += i;
    output.innerHTML += summation + "<br>";
}

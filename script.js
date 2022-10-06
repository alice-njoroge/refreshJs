//magic switch ball
let output = document.getElementById('output');
let question = prompt("what is your question?");

let response = Math.floor(Math.random()*6);

switch (response){
    case 1:
        output.innerHTML = "I think so";
        break;
    case 2 :
        output.innerHTML = "yes";
        break;
    case 3:
        output.innerHTML = "no";
        break;
    default:
        output.innerHTML = "I dont know";
}


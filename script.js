let txt = document.querySelector(".txt");
let body = document.querySelector("body");

let userFirstMessage = prompt('text');
let userSecondMessage = prompt('bg color');

body.style.backgroundColor = userSecondMessage;
txt.style.color = userFirstMessage;
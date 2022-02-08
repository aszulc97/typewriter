"use strict";
let i = 0;
let typewritingStr = "";
let str = document.querySelector(".typewritten").textContent;
window.addEventListener("load", start);

function start() {
  writeChar();
}

function writeChar() {
  typewritingStr = typewritingStr + str.charAt(i);
  i++;
  if (i < str.length + 1) {
    setTimeout(() => {
      document.getElementById("typewriter").textContent = typewritingStr;
      writeChar();
    }, 200);
  }
}

"use strict";
let i = 0;
let j = 0;
let typewritingStr = "";
let string = document.querySelector("typewritten");
let emptyStr = Array.from(document.getElementsByClassName("typewritten"));
let str = Array.from(document.getElementsByClassName("typewritten"));
str = str.map((string22) => string22.textContent);
window.addEventListener("load", start);

function start() {
  emptyStr.forEach((string2) => {
    string2.textContent = "";
  });
  document.querySelector("#submit").addEventListener("click", function () {
    writeChar();
    document.querySelector("#submit").classList.add("hidden");
  });
}

function writeChar() {
  let times = [300, 600, 1000];
  let time = Math.floor(Math.random() * 3);
  setTimeout(() => {
    for (j = 0; j < str.length; j++) {
      typewrite(str[j]);
    }
    console.log(i);
    i++;
  }, 1000);
}

function typewrite(str) {
  console.log(str);
  if (i < str.length + 1) {
    // typewritingStr = typewritingStr + str.charAt(i);
    // console.log(typewritingStr);
    emptyStr[j].textContent = emptyStr[j].textContent + str.charAt(i);
    console.log(str.charAt(i));
    if (str.charAt(i) === " ") {
      document.getElementById("typespace").play();
      console.log("space");
      writeChar();
    } else if (i === str.length) {
      document.getElementById("typelast").play();
      writeChar();
    } else {
      let rnd = Math.floor(Math.random() * 2);
      if (rnd === 0) {
        document.getElementById("typekey2").play();
        writeChar();
      } else if (rnd === 1) {
        document.getElementById("typekey2").play();
        writeChar();
      }
    }
  }
}

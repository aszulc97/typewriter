"use strict";
let i = 0;
let typewritingStr = "";
let str = document.querySelector(".typewritten").textContent;
window.addEventListener("load", start);

function start() {
  document.querySelector(".typewritten").textContent = "";
  document.querySelector("#submit").addEventListener("click", function () {
    writeChar();
    document.querySelector("#submit").classList.add("hidden");
  });
}

function writeChar() {
  let times = [300, 600, 1000];
  let time = Math.floor(Math.random() * 3);
  setTimeout(() => {
    if (i < str.length + 1) {
      typewritingStr = typewritingStr + str.charAt(i);
      document.getElementById("typewriter").textContent = typewritingStr;
      console.log(str.charAt(i));
      console.log(times[time]);
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
    i++;
  }, times[time]);
}

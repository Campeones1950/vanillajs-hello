/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /*write your code here*/
  console.log("Este es un mensjae de control de la funsión window.onload");
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
function generateExcuse() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function randomElement(arreglo) {
    let arregloIndex = Math.floor(Math.random() * arreglo.length);
    return arreglo[arregloIndex];
  }

  return (
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when)
  );
}

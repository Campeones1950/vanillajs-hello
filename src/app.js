/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  let palos = ["♦", "♥", "♠", "♣"];

  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let cambiarCartabBtn = document.getElementById("cambiarCarta");
  let paloArriba = document.getElementById("paloArriba");
  let paloAbajo = document.getElementById("paloAbajo");
  let valor = document.getElementById("valor");
  let jugaDeNuevo;

  function cambiarCarta() {
    let palosAleat = Math.floor(Math.random() * palos.length);

    let valoresAleat = Math.floor(Math.random() * valores.length);

    paloArriba.innerHTML = palos[palosAleat];
    paloAbajo.innerHTML = palos[palosAleat];
    valor.innerHTML = valores[valoresAleat];

    if (palos[palosAleat] == "♥" || palos[palosAleat] == "♦") {
      paloArriba.style.color = "red";
      paloAbajo.style.color = "red";
    } else {
      paloArriba.style.color = "black";
      paloAbajo.style.color = "black";
    }

    if (jugaDeNuevo) {
      clearTimeout(jugaDeNuevo);
    }
    jugaDeNuevo = setTimeout(function() {
      alert("!Cuidado, el juego puede ser adictivo¡");
    }, 2000);
  }

  cambiarCartabBtn.addEventListener("click", cambiarCarta);
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

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
      alert("¿El juego puede ser adictivo, cuidado?");
    }, 2000);
  }

  cambiarCartabBtn.addEventListener("click", cambiarCarta);
};

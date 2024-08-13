/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function newCard() {
    let suite = ["♦", "♥", "♠", "♣"];
    let numbersAndLetter = [
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

    let indexSuite = Math.floor(Math.random() * suite.length);
    let indexNumbersAndLetter = Math.floor(
      Math.random() * numbersAndLetter.length
    );

    let selectedSuite = suite[indexSuite];
    let selectedNumber = numbersAndLetter[indexNumbersAndLetter];

    document.querySelector("#top").innerHTML = selectedSuite;
    document.querySelector("#numbers").innerHTML = selectedNumber;
    document.querySelector("#end").innerHTML = selectedSuite;

    let colors = ["text-danger", "text-dark"];
    let color = colors[Math.floor(Math.random() * colors.length)];

    let cardElement = document.querySelector("#card");

    if (cardElement) {
      cardElement.classList.remove("text-danger", "text-dark");
      cardElement.classList.add(color);
    }

    let width = document.querySelector("#widthInput").value;
    let height = document.querySelector("#heightInput").value;

    if (width) {
      cardElement.style.width = width + "px";
      if (height) {
        cardElement.style.height = height + "px";
      }
    }
  }

  newCard();

  document.querySelector("#newCardButton").addEventListener("click", newCard);

  setInterval(newCard, 10000);
};

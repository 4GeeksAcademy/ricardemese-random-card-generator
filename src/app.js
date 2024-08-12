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

    let color =
      selectedSuite == "♦" || suite[indexSuite] == "♥"
        ? "text-danger"
        : "text-dark";

    let cardElement = (document.querySelector("#card").className = color);
  }

  newCard();

  document.querySelector("#newCardButton").addEventListener("click", newCard);
};

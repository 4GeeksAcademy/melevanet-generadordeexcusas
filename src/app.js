/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const randonindexExcusas = length => {
    return Math.floor(Math.random() * length);
  };

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

  const randomExcuse = `${who[randonindexExcusas(who.length)] +
    " " +
    action[randonindexExcusas(action.length)] +
    " " +
    what[randonindexExcusas(what.length)]}`;
  " " + when[randonindexExcusas(action.length)];

  document.getElementById("excuse").innerHTML = randomExcuse;

  console.log("hello ringo from the console");
};

"use strict";
const bodyElement = document.body;
bodyElement.style =
  "box-sizing: border-box; display: flex; flex-direction: column; align-items: center; background-color: rgb(53, 52, 52)";

const inputContainer = document.querySelector(".input");
inputContainer.style.textAlign = "center";
const inputElement = document.createElement("input");
let dimensions = 16;

inputElement.setAttribute("type", "range");
inputElement.setAttribute("value", "16");
inputElement.setAttribute("min", "1");
inputElement.setAttribute("max", "100");
const h3 = document.createElement("h3");
h3.style.color = "#fff";
h3.textContent = "Grid Size:";
inputContainer.appendChild(h3);
inputContainer.appendChild(inputElement);

const flexContainer = document.querySelector(".flex-container");
flexContainer.style =
  "display: flex; flex-direction: column;  height: 500px; width: 500px;";

const outputElement = document.createElement("output");
outputElement.textContent = inputElement.getAttribute("value");
inputContainer.appendChild(outputElement);

inputElement.addEventListener("change", (el) => {
  outputElement.textContent = el.target.value;
  dimensions = Number(el.target.value);
  flexContainer.innerHTML = "";
  gridLayout();
  console.log(dimensions);
});

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const rgbColor = "rgb(" + red + "," + green + "," + blue + ")";

  return rgbColor;
}

const gridLayout = function () {
  for (let i = 0; i < dimensions; i++) {
    const row = document.createElement("div");
    row.style = "display: flex; flex-grow: 1;"; // Set display to flex for the row

    for (let j = 0; j < dimensions; j++) {
      const square = document.createElement("div");
      square.style = "flex-grow: 1; border: 1px solid white; "; // Set flex-grow to evenly distribute squares in a row
      square.addEventListener("mouseover", (el) => {
        el.target.style.backgroundColor = randomColor();
      });
      row.appendChild(square);
    }

    flexContainer.appendChild(row);
  }
};
gridLayout();

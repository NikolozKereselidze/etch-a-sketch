"use strict";
const bodyElement = document.body;
bodyElement.style =
  "box-sizing: border-box; display: flex; justify-content: center; background-color: rgb(53, 52, 52)";

const flexContainer = document.querySelector(".flex-container");
flexContainer.style =
  "display: flex; flex-direction: column;  height: 500px; width: 500px;";

const horizontalDimensions = 16;
const verticalDimensions = 16;

for (let i = 0; i < horizontalDimensions; i++) {
  const row = document.createElement("div");
  row.style = "display: flex; flex-grow: 1;"; // Set display to flex for the row

  for (let j = 0; j < verticalDimensions; j++) {
    const square = document.createElement("div");
    square.style = "flex-grow: 1; border: 1px solid white; "; // Set flex-grow to evenly distribute squares in a row
    square.addEventListener("mouseover", (el) => {
      console.log(el);
      el.target.style.backgroundColor = "white";
    });
    row.appendChild(square);
  }

  flexContainer.appendChild(row);
}

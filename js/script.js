const mainContainer = document.querySelector(".main-container");

const modifyButton = document.querySelector(".modify-button");

const DEFAULT_GRID_SIZE = 16;
let gridSize = DEFAULT_GRID_SIZE;

modifyButton.addEventListener("click", () => {
  while (true) {
    gridSize = +prompt("How many squares per side do you want?", 16);
    if (gridSize >= 16 && gridSize <= 99) {
      break;
    } else {
      alert("You can only use values from 16 to 99!");
    }
  }
  createGrid(gridSize);
});

const randomizeBox = document.querySelector("input[name=randomize]");

let randomized = false;
randomizeBox.addEventListener("change", function (e) {
  if (e.target.checked) {
    randomized = true;
  } else {
    randomized = false;
  }
});

const darkeningBox = document.querySelector("input[name=darkening");

let darkened = false;
darkeningBox.addEventListener("change", function (e) {
  if (e.target.checked) {
    darkened = true;
  } else {
    darkened = false;
  }
});

const eraseButton = document.querySelector(".erase-button");

eraseButton.addEventListener("click", () => {
  createGrid(gridSize);
});

const sizeContainer = document.querySelector(".size-container");

function removeExistingGrid() {
  mainContainer.replaceChildren();
}

function displayGridSize() {
  sizeContainer.textContent = `Total grids: ${gridSize} x ${gridSize}`;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomizeGridColors(e) {
  if (randomized) {
    let red = getRandomIntInclusive(0, 255);
    let green = getRandomIntInclusive(0, 255);
    let blue = getRandomIntInclusive(0, 255);
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  } else {
    e.target.style.backgroundColor = "orange";
  }
}

function darkenGridColors(e) {
  if (darkened) {
    let opacity = parseFloat(window.getComputedStyle(e.target).opacity);
    if (opacity > 0) {
      opacity -= 0.1;
    }
    e.target.style.opacity = opacity;
  }
}

function createGrid(gridSize) {
  removeExistingGrid();
  displayGridSize()
  for (let i = 0; i < gridSize; i++) {
    const outerContainer = document.createElement("div");
    outerContainer.setAttribute("class", "outer-container");
    for (let j = 0; j < gridSize; j++) {
      const innerContainer = document.createElement("div");
      innerContainer.setAttribute("class", "inner-container");
      innerContainer.addEventListener("mouseenter", function (e) {
        randomizeGridColors(e);
        darkenGridColors(e);
      });
      outerContainer.appendChild(innerContainer);
    }
    mainContainer.appendChild(outerContainer);
  }
}

createGrid(gridSize);

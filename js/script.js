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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createGrid(gridSize) {
  mainContainer.replaceChildren();
  
  for (let i = 0; i < gridSize; i++) {
    const outerContainer = document.createElement("div");
    outerContainer.setAttribute("class", "outer-container");
    
    for (let j = 0; j < gridSize; j++) {
      const innerContainer = document.createElement("div");
      innerContainer.setAttribute("class", "inner-container");
      innerContainer.addEventListener("mouseenter", function (e) {
        
        if (randomized) {
          innerContainer.style.backgroundColor = `rgb(${getRandomIntInclusive(0, 255)},
          ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)})`;
        } else {
          innerContainer.style.backgroundColor = "black";
        }
      });
      
      outerContainer.appendChild(innerContainer);
    }
    mainContainer.appendChild(outerContainer);
  }
}

createGrid(gridSize);

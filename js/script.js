const mainContainer = document.querySelector(".main-container");

for (let i = 0; i < 16; i++) {
  const outerContainer = document.createElement("div");
  outerContainer.setAttribute("class", "outer-container");
  for (let j = 0; j < 16; j++) {
    const innerContainer = document.createElement("div");
    innerContainer.setAttribute("class", "inner-container");

    innerContainer.addEventListener("mouseenter", () => {
      innerContainer.style.backgroundColor = "black";
    });

    outerContainer.appendChild(innerContainer);
  }
  mainContainer.appendChild(outerContainer);
}

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
});

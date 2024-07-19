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

class ButtonBackgroundColor {
  buttonValue: string;
  color: string;

  constructor(buttonValue: string, color: string) {
    this.buttonValue = buttonValue;
    this.color = color;
  }
}

let bgColors = [
  new ButtonBackgroundColor("Red", "red"),
  new ButtonBackgroundColor("Blue", "blue"),
  new ButtonBackgroundColor("Yellow", "yellow"),
  new ButtonBackgroundColor("Brown", "brown"),
  new ButtonBackgroundColor("Purple", "purple"),
  new ButtonBackgroundColor("Green", "green"),
  new ButtonBackgroundColor("Black", "black"),
  new ButtonBackgroundColor("Grey", "grey"),
  new ButtonBackgroundColor("Pink", "pink"),
  new ButtonBackgroundColor("Cyan", "cyan"),
  new ButtonBackgroundColor("Coral", "coral"),
  new ButtonBackgroundColor("GreenYellow", "greenYellow"),
  //   new ButtonBackgroundColor("Salmon", "salmon"),
];

let header = document.getElementById("page-title");

const assignBackgroundColor = (btnBgColor: ButtonBackgroundColor) => {
  document.body.style.backgroundColor = btnBgColor.color;

  if (header != null) {
    btnBgColor.buttonValue === "Black"
      ? (header.style.color = "white")
      : (header.style.color = "black");

    header.innerHTML = `Current color is ${btnBgColor.buttonValue} `;
  }
};

let btnsDiv = document.getElementById("btns-div");

for (let bgColor of bgColors) {
  const buttonColor = document.createElement("button");
  buttonColor.innerText = bgColor.buttonValue;
  buttonColor.style.borderColor = bgColor.color;
  buttonColor.style.color = bgColor.color;
  btnsDiv?.appendChild(buttonColor);

  buttonColor.addEventListener("click", () => assignBackgroundColor(bgColor));
}

const buttonReset = document.createElement("button");
buttonReset.innerText = "Reset";
buttonReset.className = "reset";
btnsDiv?.appendChild(buttonReset);
buttonReset.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  if (header != null) {
    header.innerHTML = "Currently displaying the default background color";
    header.style.color = "black";
  }
});

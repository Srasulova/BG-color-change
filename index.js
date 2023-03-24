var ButtonBackgroundColor = /** @class */ (function () {
    function ButtonBackgroundColor(buttonValue, color) {
        this.buttonValue = buttonValue;
        this.color = color;
    }
    return ButtonBackgroundColor;
}());
var bgColors = [
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
var header = document.getElementById("page-title");
var assignBackgroundColor = function (btnBgColor) {
    document.body.style.backgroundColor = btnBgColor.color;
    if (header != null) {
        btnBgColor.buttonValue === "Black"
            ? (header.style.color = "white")
            : (header.style.color = "black");
        header.innerHTML = "Current color is ".concat(btnBgColor.buttonValue, " ");
    }
};
var btnsDiv = document.getElementById("btns-div");
var _loop_1 = function (bgColor) {
    var buttonColor = document.createElement("button");
    buttonColor.innerText = bgColor.buttonValue;
    buttonColor.style.borderColor = bgColor.color;
    buttonColor.style.color = bgColor.color;
    btnsDiv === null || btnsDiv === void 0 ? void 0 : btnsDiv.appendChild(buttonColor);
    buttonColor.addEventListener("click", function () { return assignBackgroundColor(bgColor); });
};
for (var _i = 0, bgColors_1 = bgColors; _i < bgColors_1.length; _i++) {
    var bgColor = bgColors_1[_i];
    _loop_1(bgColor);
}
var buttonReset = document.createElement("button");
buttonReset.innerText = "Reset";
buttonReset.className = "reset";
btnsDiv === null || btnsDiv === void 0 ? void 0 : btnsDiv.appendChild(buttonReset);
buttonReset.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
    if (header != null) {
        header.innerHTML = "Currently displaying the default background color";
        header.style.color = "black";
    }
});

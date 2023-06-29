function createTiles(size) {
    let parent = document.getElementById("container");
    let tileWidth = parent.clientWidth / (size + 1) + "px";
    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++) {
            let newDiv = document.createElement("div");
            newDiv.className = "tile";
            newDiv.style.width = tileWidth;
            newDiv.style.height = tileWidth;
            parent.appendChild(newDiv);
        }
    }
}

function random() {
    return Math.floor(Math.random()*256);
}


function changeColor(r, g, b) {
    color = `rgb(${r}, ${g}, ${b})`;
}

function clear() {
    container.innerHTML = "";
}

const smallButton = document.getElementById("small");
const mediumButton = document.getElementById("medium");
const largeButton = document.getElementById("large");
const redButton = document.getElementById("red");
const greenButton = document.getElementById("green");
const blueButton = document.getElementById("blue");
const blackButton = document.getElementById("black");
const clearButton = document.getElementById("clear");
const container = document.querySelector("#container");
let color = `rgb(0, 0, 0)`;
smallButton.addEventListener("click", () => {createTiles(4)});
mediumButton.addEventListener("click", () => {createTiles(8)});
largeButton.addEventListener("click", () => {createTiles(12)});
redButton.addEventListener("click", () => {changeColor(255, 0, 0)});
greenButton.addEventListener("click", () => {changeColor(0, 255, 0)});
blueButton.addEventListener("click", () => {changeColor(0, 0, 255)});
blackButton.addEventListener("click", () => {changeColor(0, 0, 0)});
clearButton.addEventListener("click", () => {clear()});
container.addEventListener("click", event => {
    event.target.style.backgroundColor = color;
});
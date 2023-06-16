function createTiles(size) {
    let parent = document.getElementById("container");
    let tileWidth = parent.offsetWidth / size + "px";
    for (let i=0; i<size*size; i++) {
        let newDiv = document.createElement("div");
        newDiv.className = "tile";
        newDiv.style.width = tileWidth;
        newDiv.style.height = tileWidth;
        parent.appendChild(newDiv);
    }
}

function random(number) {
    return Math.floor(Math.random()*number);
}

function changeColor() {
    const color = `rgb(0, 0, 0)`;
    return color;
}


const smallButton = document.getElementById("small");
const mediumButton = document.getElementById("medium");
const largeButton = document.getElementById("large");
const container = document.querySelector("#container");
smallButton.addEventListener("click", () => {createTiles(8)});
mediumButton.addEventListener("click", () => {createTiles(16)});
largeButton.addEventListener("click", () => {createTiles(24)});
container.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = changeColor();
});
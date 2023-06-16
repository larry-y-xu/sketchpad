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

createTiles(8);
const container = document.querySelector("#container");
container.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = changeColor();
});
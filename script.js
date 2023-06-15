function createTiles(size) {
    for (let i=0; i<size*size; i++) {
        let newDiv = document.createElement("div");
        let parent = document.getElementById("container");
        newDiv.className = "tile";
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

createTiles(25);
const container = document.querySelector("#container");
container.addEventListener("click", event => {
    event.target.style.backgroundColor = changeColor();
});
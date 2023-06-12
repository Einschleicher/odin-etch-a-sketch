const container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

let squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", function(e) {
        square.style.backgroundColor = "black";
    })
})

const btn = document.querySelector("button");

btn.addEventListener("click", function() {
    let userGridSize = prompt("Choose a gridsize (max 100)");
    while (userGridSize > 100) {
        userGridSize = prompt("Choose a gridsize (max 100)");
        }
    squares.forEach(square => {
        container.removeChild(square);
    })

    for (let i = 0; i < userGridSize * userGridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.style.width = (800 - 32) / userGridSize + "px";
        square.style.height = (800 - 32) / userGridSize + "px";
    }

    squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", function(e) {
            square.style.backgroundColor = "black";
        })
    })
})
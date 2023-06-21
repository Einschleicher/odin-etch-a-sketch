const container = document.querySelector("#container");
const btn = document.querySelector("button");

// Render default grid
for (let i = 0; i < 16 * 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.setAttribute("counter", 0);
    container.appendChild(square);
}

// Add event listener for default grid
let squares = document.querySelectorAll(".square");

squares.forEach(square => {
    square.addEventListener("mouseover", function(e) {
        let counter = parseInt(square.getAttribute("counter")) + 1;
        if (square.getAttribute("counter") === "0") {
            square.style.backgroundColor = getRandomRGB();
        }
        else if (square.getAttribute("counter") >= 10) {
            square.style.backgroundColor = "rgb(0, 0, 0)"
        }
        square.setAttribute("counter", counter)
    })
})

btn.addEventListener("click", function() {
    // Ask user for a custom gridsize
    let userGridSize = prompt("Choose a gridsize (max 100)");
    // Prompt as long as input is > 100
    while (userGridSize > 100) {
        userGridSize = prompt("Choose a gridsize (max 100)");
        }
    // Remove old grid
        squares.forEach(square => {
        container.removeChild(square);
    })

    // Draw new grid, adjust width/height of the squares
    for (let i = 0; i < userGridSize * userGridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.style.width = (800 - 32) / userGridSize + "px";
        square.style.height = (800 - 32) / userGridSize + "px";
    }

    // Add event listener for custom grid
    squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", function(e) {
            square.style.backgroundColor = getRandomRGB();
        })
    })
})

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

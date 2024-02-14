function totalPixels(userDefined) {
    const result = Math.pow(userDefined, 2)
    return result
}

function divSize(userDefined) {
    const size = 100 / userDefined
    return `${size}%`
}

function creatingDivs(userDefined) {
    for (let i = 0; i < totalPixels(userDefined); i++) {
        const sketch = document.querySelector(".sketch")
        const div = document.createElement('div')
        div.classList.add(`pixel`)
        div.style.minWidth = divSize(userDefined)
        div.style.minHeight = divSize(userDefined)
        sketch.appendChild(div)
    }
}

function removeDivs() {
    const container = document.getElementById('container')
    container.innerHTML = ""
}

function onOver() {
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = randomColor()
        })
    })
}

function randomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return color = "#" + randomColor;
}

const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    removeDivs()
    creatingDivs(input.value)
    onOver()
});



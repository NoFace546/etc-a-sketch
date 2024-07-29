const grid = document.querySelector("#grid")
const button = document.querySelector("button")


let gridWidthLength = 20

function createGrid (gridLength){
    grid.innerHTML =""
    for (let i = 1; i <= (gridLength**2); i++){
        const div = document.createElement("div");
        div.classList.add("gridBlock")
        div.classList.add("1")
        div.style.cssText=`width: ${(1/gridLength)*100}%; height:`
        div.addEventListener("mouseenter", changeColor)
        grid.appendChild(div);
    }

}

function changeColor (e){
    e.target.style.backgroundColor = `rgb(${randomNumber(0,255)}, ${randomNumber(0,255)}, ${randomNumber(0,255)})`;
    e.target.style.opacity = Number(e.target.classList[1])
    let currentOpacity = e.target.classList[1]
    currentOpacity = (currentOpacity-0.1).toFixed(1);
       e.target.classList.replace(e.target.classList[1], currentOpacity)
}

createGrid(gridWidthLength)

function randomNumber (min, max){
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number
}

button.addEventListener("click", () => {
    let gridLength = prompt("pick grid length")
    createGrid(gridLength)
})

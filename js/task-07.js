const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", sizeControl);

function sizeControl (event) {
    const fontSize = event.target.value + "px";
    textEl.style.fontSize = fontSize;
    
    console.log(fontSize);
}

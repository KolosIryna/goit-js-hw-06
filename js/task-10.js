function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");

const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let boxWidth = 30;
  let boxHeidth = 30;
  const boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");

    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeidth}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesArray.push(box);
    boxWidth += 10;
    boxHeidth +=10;
  }

  boxesEl.append(...boxesArray);
}

function handlerCreateClick () {
  const inputValue = Number(inputEl.value);
  boxesEl.innerHTML = "";
  createBoxes(inputValue);
}

btnCreate.addEventListener("click", handlerCreateClick);
btnDestroy.addEventListener("click",handlerDestroyClick);

function handlerDestroyClick() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
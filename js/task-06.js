const inputEl = document.querySelector("#validation-input");
const inputLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur (event) {
    if (event.currentTarget.value.length === inputLength) {
        inputEl.classList.add("valid");
    } else {
        inputEl.classList.add("invalid");
    }
}

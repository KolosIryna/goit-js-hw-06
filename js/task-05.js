const inputEl = document.getElementById("name-input");
const output = document.getElementById("name-output");


inputEl.addEventListener("input", (event) => {
    if (inputEl.value === "") {
        output.textContent = "Anonymous";
    } else {
   output.textContent = event.currentTarget.value;
    }
});

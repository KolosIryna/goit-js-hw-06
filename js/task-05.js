const inputEl = document.getElementById("name-input");
const output = document.getElementById("name-output");


inputEl.addEventListener("input", (event) => {
    output.textContent = event.target.value || 'Anonymous';
});

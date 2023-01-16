const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  checkbox.checked
  ? html.dataset.theme = 'dark'
  : html.dataset.theme = 'cupcake'
}

checkbox.addEventListener("click",toggleDarkMode);
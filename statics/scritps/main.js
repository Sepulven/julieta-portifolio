const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  if (checkbox.checked)
  {
    html.dataset.theme = "dark"
  } else {
    html.dataset.theme = "cyberpunk"
  }
}

checkbox.addEventListener("click",toggleDarkMode);
var currentMode = "dark";
function switchMode() {
  var cssStyle = "";
  if (currentMode === "light") {
    cssStyle = "/css-dark.css";
    window.currentMode = "dark";
  } else if (currentMode === "dark") {
    cssStyle = "/css-light.css";
    window.currentMode = "light";
  }
  var link = document.getElementById("css-mode");
  link.setAttribute("href", "https://revaekap.github.io/Kalkulator/" + cssStyle);
}

const colors = ["#1abc9c", "#3498db", "#9b59b6"];
document.body.style.backgroundColor = colors[0];

function reSize() {
  const width = window.innerWidth;
  if (width > 1000) {
    document.body.style.backgroundColor = colors[0];
  } else if (width < 1000 && width > 600) {
    document.body.style.backgroundColor = colors[1];
  } else document.body.style.backgroundColor = colors[2];
}

window.addEventListener("resize", reSize);

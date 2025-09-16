const textEl = document.getElementById("text");
const text = "Développeur web front-end & back-end";

// j'indique le nombre d'increments pour l'effet d'écriture
let idx = 1;
// j'indique la vitesse de l'effet d'écriture
let speed = 150;

function writeText() {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

writeText();

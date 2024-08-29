// creazione tabbellone
const tombola = document.getElementById("tombola");

// button random num
const button = document.getElementById("button");
const numText = document.querySelector("div h3");

for (let i = 0; i < 100; i++) {
  //   crazione tomb
  const elementombola = document.createElement("div");
  elementombola.classList = "NumTombola";

  const numeroT = document.createElement("h2");
  let testoN = (numeroT.innerText = i + 1);

  tombola.appendChild(elementombola);
  elementombola.appendChild(numeroT);
}

button.onclick = () => acaso();

function acaso() {
  const num = Math.floor(Math.random() * 101);
  numText.innerText = num;

  let celle = document.querySelectorAll(".NumTombola");

  celle.forEach(function (cella) {
    let numeroH2 = cella.querySelector("h2").textContent;

    if (numeroH2 === num) {
      cella.classList.add("select");
    }
  });
}

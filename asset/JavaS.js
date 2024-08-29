// creazione tabbellone
const tombola = document.getElementById("tombola");

// button random num
const button = document.getElementById("button");
const numText = document.querySelector("div h3");

for (let i = 0; i < 90; i++) {
  //   crazione tomb
  const elementombola = document.createElement("div");
  elementombola.classList.add("NumTombola");

  const numeroT = document.createElement("h2");
  numeroT.innerText = i + 1;

  elementombola.appendChild(numeroT);
  tombola.appendChild(elementombola);
}

button.onclick = getrandom;

function getrandom() {
  const notSelected = document.querySelectorAll("div[class='NumTombola']");
  console.log(notSelected.length);

  if (notSelected.length > 0) {
    const num = Math.ceil(Math.random() * 90);
    numText.innerText = num;

    const celleh2 = document.querySelectorAll(".NumTombola h2");

    const selectedElement = celleh2[num - 1];
    selectedElement.parentNode.classList.add("Select");

    console.log(celleh2[num - 1]);
  } else {
    alert("gioco finito");
  }
}

// Création d'un damier en HTML et CSS

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const title = document.createElement("h1");
title.textContent = "Damier";
body.appendChild(title);

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.width = "500px";
container.style.height = "500px";
body.appendChild(container);

// Création des colonnes

const columns = document.createElement("div");
columns.style.height = "20px";
columns.style.marginLeft = "20px";
columns.style.display = "flex";
columns.style.justifyContent = "center";
columns.style.alignItems = "center";
columns.style.gap = "50px";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

for (let i = 0; i < letters.length; i++) {
  const column = document.createElement("p");
  column.className = "column-" + letters[i];
  column.style.margin = "0px";
  column.textContent = letters[i];
  columns.appendChild(column);
}

// Création des lignes

const rows = document.createElement("div");
rows.style.width = "20px";
rows.style.display = "flex";
rows.style.flexDirection = "column";
rows.style.justifyContent = "center";
rows.style.alignItems = "center";
rows.style.gap = "40px";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  const row = document.createElement("p");
  row.className = "row-" + numbers[i];
  row.style.margin = "0px";
  row.textContent = numbers[i];
  rows.appendChild(row);
}

// Création du damier

const board = document.createElement("div");
board.style.display = "flex";
board.style.flex = "1";
board.style.flexWrap = "wrap";
board.style.backgroundColor = "black";

const baseline = document.createElement("div");
baseline.style.display = "flex";
baseline.style.height = "100%";

baseline.appendChild(rows);
baseline.appendChild(board);

container.appendChild(columns);
container.appendChild(baseline);

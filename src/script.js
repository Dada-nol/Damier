// Création d'un damier en HTML et CSS

const body = document.querySelector("body");
body.style.textAlign = "center";

const title = document.createElement("h1");
title.textContent = "Damier";
body.appendChild(title);

// Création des colonnes

const columns = document.createElement("div");
columns.style.display = "flex";
columns.style.justifyContent = "center";
columns.style.gap = "1rem";

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
rows.style.display = "flex";
rows.style.flexDirection = "column";
rows.style.gap = "1rem";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  const row = document.createElement("p");
  row.className = "row-" + numbers[i];
  row.style.margin = "0px";
  row.textContent = numbers[i];
  rows.appendChild(row);
}

body.appendChild(columns);
body.appendChild(rows);

// Test de la sélection de la première colonne
const test = document.querySelector(".column-A");
test.style.color = "red";

// Création du damier

const board = document.createElement("div");

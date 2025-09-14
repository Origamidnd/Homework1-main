// Задание 1
const title = document.querySelector("#main-title");
const button = document.querySelector("#toggle-btn");

button.addEventListener("click", () => {
  if (title.style.display === "none") {
    title.style.display = "block";
    button.textContent = "Скрыть";
  } else {
    title.style.display = "none";
    button.textContent = "Показать";
  }
});


// Задание 2
const text = document.querySelector("#my-text");
const button_two = document.querySelector("#color-btn");

button_two.addEventListener("click", () => {
  text.style.color = "blue";
});

// Задание 3
const title_two = document.querySelector("#main-title_two");
const changeTextBtn = document.querySelector("#change-text-btn");

changeTextBtn.addEventListener("click", () => {
  title_two.textContent = "Привет, мир!";
});

// Задание 4
const descriptions = document.querySelectorAll(".description");

descriptions.forEach(el => {
  el.textContent = "Измененный текст";
});

// Задание 5
const descriptions1 = document.querySelectorAll(".description1");

descriptions1.forEach(element => {
  element.textContent = "Новый текст";
});

// Задание 6
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "Новый абзац";

  document.body.appendChild(newParagraph);
});


// Задание 7
const deleteBtn = document.querySelector("#delete-btn");

deleteBtn.addEventListener("click", () => {
  const firstDescription = document.querySelector(".description-three");
  
  if (firstDescription) {
    firstDescription.remove();
  }
});

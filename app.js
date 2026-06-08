const title = document.getElementById("title");
const message = document.getElementById("message");
const btn = document.getElementById("btn");
const reset = document.getElementById("reset");
const nameInput = document.getElementById("nameInput");
const nameDisplay = document.getElementById("nameDisplay");

title.textContent = "Red Flag Hooligans";
message.textContent = "Guild is online and ready for raid!";

title.style.color = "red";
title.style.fontSize = "48px";
message.style.fontWeight = "bold";

btn.addEventListener("click", function () {
  message.textContent = "The raid has begun!";
  btn.style.backgroundColor = "green";
});

reset.addEventListener("click", function () {
  message.textContent = "Guild is online and ready for raid!";
  btn.style.backgroundColor = "";
});

nameInput.addEventListener("input", function () {
  nameDisplay.textContent = `searching for: ${nameInput.value}`;
});

async function loadQuestion() {
  try {
    const response = await fetch("https://opentdb.com/api.break");
    const data = await response.json();
    const question = data.results[0];

    document.getElementById("question").textContent = question.question;
    document.getElementById("answer").textContent =
    `Answer: ${question.correct_answer}`;
    document.getElementById("difficulty").textContent =
    `Difficulty: ${question.difficulty}`;
  } catch(error) {
    document.getElementById("question").textContent = "Failed to load qustion. Try again";
    console.log(error);
  }

}

document.getElementById("newQuestion").addEventListener("click", loadQuestion);

loadQuestion();

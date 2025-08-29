// =======================
// Part 1: Variables & Conditionals
// =======================
let age = 20;
let message;

if (age >= 18) {
  message = "You are an adult.";
} else {
  message = "You are a minor.";
}

document.getElementById("output1").textContent = message;

// =======================
// Part 2: Functions
// =======================
function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

function sum(a, b) {
  return a + b;
}

document.getElementById("output2").textContent = `${greet("Sydney")} Sum: ${sum(5, 10)}`;

// =======================
// Part 3: Loops
// =======================
let numbers = [1, 2, 3, 4, 5];
let loopOutput = document.getElementById("loopOutput");

// For loop
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = `Number (for): ${numbers[i]}`;
  loopOutput.appendChild(li);
}

// While loop
let j = 0;
while (j < numbers.length) {
  let li = document.createElement("li");
  li.textContent = `Number (while): ${numbers[j]}`;
  loopOutput.appendChild(li);
  j++;
}

// =======================
// Part 4: DOM Manipulation
// =======================
document.getElementById("changeTextBtn").addEventListener("click", function() {
  let domOutput = document.getElementById("domOutput");
  domOutput.textContent = "The text has been changed!";
  domOutput.style.color = "blue";
  domOutput.style.fontWeight = "bold";
});

// Another DOM interaction
let newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added dynamically.";
document.getElementById("part4").appendChild(newParagraph);

// =======================
// Part 5: Interactive Form
// =======================
document.getElementById("userForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("username").value;
  let ageInput = parseInt(document.getElementById("ageInput").value);
  let output = document.getElementById("formOutput");

  if (ageInput >= 18) {
    output.textContent = `Hello ${name}, you are an adult! 🎉`;
    output.style.color = "green";
  } else {
    output.textContent = `Hello ${name}, you are a minor. ⚠️`;
    output.style.color = "orange";
  }

  this.reset();
});

document.getElementById("start-button").addEventListener("click", startGame);

let randomNumber; // Random even number given by the game
let currentStep = 1; // To keep track of the current game step

function startGame() {
  // Generate a random even number between 2 and 100
  randomNumber = generateRandomNumber();

  // Hide the Start Game button and show the game steps
  document.getElementById("start-button").style.display = "none";
  document.getElementById("game-step").style.display = "block";

  // Reset the game steps and indicator
  resetGame();

  // Update the UI to show Step 1
  document.getElementById("random-number-display").textContent = `₹${randomNumber}`;
  showStep(1);
}

function resetGame() {
  // Reset the step indicator and hide result
  document.getElementById("step-indicator").textContent = "Step 1";
  document.getElementById("result").style.display = "none";
  document.getElementById("play-again-button").style.display = "none";

  // Hide all steps
  document.querySelectorAll(".step").forEach(step => step.style.display = "none");
  currentStep = 1; // Set current step back to 1
}

function showStep(step) {
  // Update the step indicator
  document.getElementById("step-indicator").textContent = `Step ${step}`;

  // Hide all steps
  document.querySelectorAll(".step").forEach((element) => (element.style.display = "none"));

  // Show the specific step
  if (step === "result") {
    document.getElementById("result").style.display = "block";
  } else {
    document.getElementById(`step-${step}`).style.display = "block";
  }
}

document.getElementById("next-button-1").addEventListener("click", () => {
  currentStep = 2;
  showStep(currentStep); // Proceed to Step 2
});

document.getElementById("next-button-2").addEventListener("click", () => {
  currentStep = 3;
  showStep(currentStep); // Proceed to Step 3
});

document.getElementById("next-button-3").addEventListener("click", () => {
  currentStep = 4;
  showStep(currentStep); // Proceed to Step 4
});

document.getElementById("next-button-4").addEventListener("click", () => {
  currentStep = 5;
  showStep(currentStep); // Proceed to Step 5
});

document.getElementById("next-button-5").addEventListener("click", () => {
  currentStep = 6;
  showStep(currentStep); // Proceed to Step 6
});

document.getElementById("next-button-6").addEventListener("click", () => {
  currentStep = 7;
  showStep(currentStep); // Proceed to Step 7
});

document.getElementById("reveal-button").addEventListener("click", () => {
  // The final number in the user's mind is half of the random number given by the game
  let userMindNumber = randomNumber / 2;

  // Reveal the result
  document.getElementById("result-message").textContent = `The amount you thought of is: ₹${userMindNumber}!`;

  // Show the result and the Play Again button
  document.getElementById("play-again-button").style.display = "block";
  showStep("result");
});

document.getElementById("play-again-button").addEventListener("click", () => {
  // Reset the game state
  document.getElementById("play-again-button").style.display = "none";
  document.getElementById("game-step").style.display = "none";

  // Show the Start Game button again
  document.getElementById("start-button").style.display = "block";
});

function generateRandomNumber() {
  // Generate an even random number between 2 and 100
  return Math.floor(Math.random() * 50 + 1) * 2; // Always even
}
